import React from "react";
import { type HourlyContent } from "../types/HourlyContent";
import { type HourlyUnits } from "../types/HourlyUnits";
import parseISO from "date-fns/parseISO";
import { WeatherService } from "../service/weatherService";
import { format } from "date-fns";
import "./hourly.css";
interface HourlyProps {
    // hourlyContent: HourlyContent;
    // hourlyUnits: HourlyUnits;
    latitude: number;
    longitude: number;
}
const Hourly: React.FC<HourlyProps> = (props) => {
    // const COUNT = 168;
    const [hourlyUnits, setHourlyUnits] = React.useState<HourlyUnits>();
    const [hourlyContent, setHourlyContent] = React.useState<HourlyContent>();
    React.useEffect(() => {
        const weatherService = new WeatherService();
        const today = new Date();
        const startDate = format(today, "yyyy-MM-dd");
        const endDate = format(today, "yyyy-MM-dd");
        void weatherService
            .gerHourlyWeather(
                props.latitude,
                props.longitude,
                startDate,
                endDate,
            )
            .then((result) => {
                setHourlyUnits(result.hourly_units);
                setHourlyContent(result.hourly);
            });
    }, [props]);
    return (
        <div>
            {hourlyUnits !== undefined && (
                <table>
                    <tbody>
                        <tr>
                            <th>Время</th>
                            <th>
                                Температура воздуха на высоте 2 метра над землей
                            </th>
                            <th>
                                Относительная влажность на высоте 2 метра над
                                землей
                            </th>
                            <th>Кажущаяся температура</th>
                            <th>Общая облачность как доля площади</th>
                            <th>Видимость</th>
                            <th>
                                Скорость ветра на высоте 10 метров над землей.
                            </th>
                            <th>
                                Направление ветра на высоте 10 метров над землей
                            </th>
                        </tr>
                        {hourlyContent?.time?.map((item, index) => (
                            <tr key={index}>
                                <td>{parseISO(item).toLocaleString()}</td>
                                <td>
                                    {hourlyContent?.temperature_2m[index]}
                                    {hourlyUnits?.temperature_2m}
                                </td>
                                <td>
                                    {hourlyContent?.relativehumidity_2m[index]}
                                    {hourlyUnits.relativehumidity_2m}
                                </td>
                                <td>
                                    {hourlyContent?.apparent_temperature[index]}
                                    {hourlyUnits.apparent_temperature}
                                </td>
                                <td>
                                    {hourlyContent?.cloudcover[index]}
                                    {hourlyUnits.cloudcover}
                                </td>
                                <td>
                                    {hourlyContent?.visibility[index]}
                                    {hourlyUnits.visibility}
                                </td>
                                <td>
                                    {hourlyContent?.windspeed_10m[index]}
                                    {hourlyUnits.windspeed_10m}
                                </td>
                                <td>
                                    {hourlyContent?.winddirection_10m[index]}
                                    {hourlyUnits.winddirection_10m}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Hourly;
