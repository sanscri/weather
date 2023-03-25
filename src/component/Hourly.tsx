import React from "react";
import { HourlyContent } from "../types/HourlyContent";
import { HourlyUnits } from "../types/HourlyUnits";
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
    }, []);
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
                            <th>
                                Температура точки росы на высоте 2 метра над
                                землей
                            </th>
                            <th>Кажущаяся температура</th>
                            <th>
                                Сумма осадков (дождь, ливни, снег) за предыдущий
                                час
                            </th>
                            <th>
                                Дождь от крупномасштабных погодных систем за
                                предыдущий час в миллиметрах
                            </th>
                            <th>
                                Ливни от конвективных осадков в миллиметрах за
                                предыдущий час
                            </th>
                            <th>
                                Количество снегопадов за предыдущий час в
                                сантиметрах
                            </th>
                            <th>Глубина снега на земле</th>
                            <th>Высота над уровнем моря уровня 0°C</th>
                            <th>
                                Атмосферное давление воздуха приведено к
                                среднему уровню моря (msl)
                            </th>
                            <th>
                                Атмосферное давление воздуха приведено к
                                давлению у поверхности.
                            </th>
                            <th>Общая облачность как доля площади</th>
                            <th>
                                Низкоуровневая облачность и туман на высоте до 3
                                км.
                            </th>
                            <th>
                                Облака среднего яруса на высоте от 3 до 8 км.
                            </th>
                            <th>Облака высокого уровня с высоты 8 км</th>
                            <th>Видимость</th>
                            <th>
                                Суммарное испарение с поверхности земли и
                                растений, предполагаемое погодными моделями для
                                этого места.
                            </th>
                            <th>Дефицит давления пара (</th>
                            <th>
                                Конвективная доступная потенциальная энергия.
                            </th>
                            <th>
                                Скорость ветра на высоте 10 метров над землей.
                            </th>
                            <th>
                                Скорость ветра на высоте 80 метров над землей.
                            </th>
                            <th>
                                Скорость ветра на высоте 120 метров над землей.
                            </th>
                            <th>
                                Скорость ветра на высоте 180 метров над землей.
                            </th>
                            <th>
                                Направление ветра на высоте 10 метров над землей
                            </th>
                            <th>
                                Направление ветра на высоте 80 метров над землей
                            </th>
                            <th>
                                Направление ветра на высоте 120 метров над
                                землей
                            </th>
                            <th>
                                Направление ветра на высоте 180 метров над
                                землей
                            </th>
                            <th>
                                Порывы ветра на высоте 10 метров над землей
                                максимум за предыдущий час
                            </th>
                            <th>
                                Температура воздуха на высоте 10 метра над
                                землей
                            </th>
                            <th>
                                Температура воздуха на высоте 80 метра над
                                землей
                            </th>
                            <th>
                                Температура воздуха на высоте 180 метра над
                                землей
                            </th>
                        </tr>
                        {hourlyContent?.time.map((item, index) => (
                            <tr key={index}>
                                <td>{parseISO(item).toLocaleString()}</td>
                                <td>
                                    {hourlyContent.temperature_2m[index]}
                                    {hourlyUnits.temperature_2m}
                                </td>
                                <td>
                                    {hourlyContent.relativehumidity_2m[index]}
                                    {hourlyUnits.relativehumidity_2m}
                                </td>
                                <td>
                                    {hourlyContent.dewpoint_2m[index]}
                                    {hourlyUnits.dewpoint_2m}
                                </td>
                                <td>
                                    {hourlyContent.apparent_temperature[index]}
                                    {hourlyUnits.apparent_temperature}
                                </td>
                                <td>
                                    {hourlyContent.precipitation[index]}
                                    {hourlyUnits.precipitation}
                                </td>
                                <td>
                                    {hourlyContent.rain[index]}
                                    {hourlyUnits.rain}
                                </td>
                                <td>
                                    {hourlyContent.showers[index]}
                                    {hourlyUnits.showers}
                                </td>
                                <td>
                                    {hourlyContent.snowfall[index]}
                                    {hourlyUnits.snowfall}
                                </td>
                                <td>
                                    {hourlyContent.snow_depth[index]}
                                    {hourlyUnits.snow_depth}
                                </td>
                                <td>
                                    {hourlyContent.freezinglevel_height[index]}
                                    {hourlyUnits.freezinglevel_height}
                                </td>
                                <td>
                                    {hourlyContent.pressure_msl[index]}
                                    {hourlyUnits.pressure_msl}
                                </td>
                                <td>
                                    {hourlyContent.surface_pressure[index]}
                                    {hourlyUnits.surface_pressure}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover[index]}
                                    {hourlyUnits.cloudcover}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover_low[index]}
                                    {hourlyUnits.cloudcover_low}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover_mid[index]}
                                    {hourlyUnits.cloudcover_mid}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover_high[index]}
                                    {hourlyUnits.cloudcover_high}
                                </td>
                                <td>
                                    {hourlyContent.visibility[index]}
                                    {hourlyUnits.visibility}
                                </td>
                                <td>
                                    {hourlyContent.evapotranspiration[index]}
                                    {hourlyUnits.evapotranspiration}
                                </td>
                                <td>
                                    {
                                        hourlyContent.vapor_pressure_deficit[
                                            index
                                        ]
                                    }
                                    {hourlyUnits.vapor_pressure_deficit}
                                </td>
                                <td>
                                    {hourlyContent.cape[index]}
                                    {hourlyUnits.cape}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_10m[index]}
                                    {hourlyUnits.windspeed_10m}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_80m[index]}
                                    {hourlyUnits.windspeed_80m}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_120m[index]}
                                    {hourlyUnits.windspeed_120m}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_180m[index]}
                                    {hourlyUnits.windspeed_180m}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_10m[index]}
                                    {hourlyUnits.winddirection_10m}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_80m[index]}
                                    {hourlyUnits.winddirection_80m}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_120m[index]}
                                    {hourlyUnits.winddirection_120m}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_180m[index]}
                                    {hourlyUnits.winddirection_180m}
                                </td>
                                <td>
                                    {hourlyContent.windgusts_10m[index]}
                                    {hourlyUnits.windgusts_10m}
                                </td>
                                <td>
                                    {hourlyContent.temperature_80m[index]}
                                    {hourlyUnits.temperature_80m}
                                </td>
                                <td>
                                    {hourlyContent.temperature_120m[index]}
                                    {hourlyUnits.temperature_120m}
                                </td>
                                <td>
                                    {hourlyContent.temperature_180m[index]}
                                    {hourlyUnits.temperature_180m}
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
