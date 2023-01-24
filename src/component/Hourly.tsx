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
                                Самые суровые погодные условия в данный день
                            </th>
                            <th>
                                Атмосферное давление воздуха приведено к
                                среднему уровню моря (msl) или давлению у
                                поверхности.
                            </th>
                            <th>
                                Атмосферное давление воздуха приведено к
                                среднему уровню моря (msl) или давлению у
                                поверхности.
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
                            <th>ET₀</th>
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
                            <th>Температура в почве на глубинах 0 см.</th>
                            <th>Температура в почве на глубинах 6 см.</th>
                            <th>Температура в почве на глубинах 18 см.</th>
                            <th>Температура в почве на глубинах 54 см.</th>
                            <th>
                                Среднее содержание влаги в почве как объемный
                                коэффициент смешивания на глубинах 0-1 см.
                            </th>
                            <th>
                                Среднее содержание влаги в почве как объемный
                                коэффициент смешивания на глубинах 1-3 см.
                            </th>
                            <th>
                                Среднее содержание влаги в почве как объемный
                                коэффициент смешивания на глубинах 3-9 см.
                            </th>
                            <th>
                                Среднее содержание влаги в почве как объемный
                                коэффициент смешивания на глубинах 9-27 см.
                            </th>
                            <th>
                                Среднее содержание влаги в почве как объемный
                                коэффициент смешивания на глубинах 27-81 см.
                            </th>
                        </tr>
                        {hourlyContent?.time.map((item, index) => (
                            <tr key={index}>
                                <td>{parseISO(item).toLocaleString()}</td>
                                <td>
                                    {hourlyContent.temperature_2m[index]}
                                    {hourlyUnits.temperature_2m[index]}
                                </td>
                                <td>
                                    {hourlyContent.relativehumidity_2m[index]}
                                    {hourlyUnits.relativehumidity_2m[index]}
                                </td>
                                <td>
                                    {hourlyContent.dewpoint_2m[index]}
                                    {hourlyUnits.dewpoint_2m[index]}
                                </td>
                                <td>
                                    {hourlyContent.apparent_temperature[index]}
                                    {hourlyUnits.apparent_temperature[index]}
                                </td>
                                <td>
                                    {hourlyContent.precipitation[index]}
                                    {hourlyUnits.precipitation[index]}
                                </td>
                                <td>
                                    {hourlyContent.rain[index]}
                                    {hourlyUnits.rain[index]}
                                </td>
                                <td>
                                    {hourlyContent.showers[index]}
                                    {hourlyUnits.showers[index]}
                                </td>
                                <td>
                                    {hourlyContent.snowfall[index]}
                                    {hourlyUnits.snowfall[index]}
                                </td>
                                <td>
                                    {hourlyContent.snow_depth[index]}
                                    {hourlyUnits.snow_depth[index]}
                                </td>
                                <td>
                                    {hourlyContent.freezinglevel_height[index]}
                                    {hourlyUnits.freezinglevel_height[index]}
                                </td>
                                <td>
                                    {hourlyContent.weathercode[index]}
                                    {hourlyUnits.weathercode[index]}
                                </td>
                                <td>
                                    {hourlyContent.pressure_msl[index]}
                                    {hourlyUnits.pressure_msl[index]}
                                </td>
                                <td>
                                    {hourlyContent.surface_pressure[index]}
                                    {hourlyUnits.surface_pressure[index]}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover[index]}
                                    {hourlyUnits.cloudcover[index]}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover_low[index]}
                                    {hourlyUnits.cloudcover_low[index]}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover_mid[index]}
                                    {hourlyUnits.cloudcover_mid[index]}
                                </td>
                                <td>
                                    {hourlyContent.cloudcover_high[index]}
                                    {hourlyUnits.cloudcover_high[index]}
                                </td>
                                <td>
                                    {hourlyContent.visibility[index]}
                                    {hourlyUnits.visibility[index]}
                                </td>
                                <td>
                                    {hourlyContent.evapotranspiration[index]}
                                    {hourlyUnits.evapotranspiration[index]}
                                </td>
                                <td>
                                    {
                                        hourlyContent
                                            .et0_fao_evapotranspiration[index]
                                    }
                                    {
                                        hourlyUnits.et0_fao_evapotranspiration[
                                            index
                                        ]
                                    }
                                </td>
                                <td>
                                    {
                                        hourlyContent.vapor_pressure_deficit[
                                            index
                                        ]
                                    }
                                    {hourlyUnits.vapor_pressure_deficit[index]}
                                </td>
                                <td>
                                    {hourlyContent.cape[index]}
                                    {hourlyUnits.cape[index]}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_10m[index]}
                                    {hourlyUnits.windspeed_10m[index]}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_80m[index]}
                                    {hourlyUnits.windspeed_80m[index]}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_120m[index]}
                                    {hourlyUnits.windspeed_120m[index]}
                                </td>
                                <td>
                                    {hourlyContent.windspeed_180m[index]}
                                    {hourlyUnits.windspeed_180m[index]}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_10m[index]}
                                    {hourlyUnits.winddirection_10m[index]}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_80m[index]}
                                    {hourlyUnits.winddirection_80m[index]}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_120m[index]}
                                    {hourlyUnits.winddirection_120m[index]}
                                </td>
                                <td>
                                    {hourlyContent.winddirection_180m[index]}
                                    {hourlyUnits.winddirection_180m[index]}
                                </td>
                                <td>
                                    {hourlyContent.windgusts_10m[index]}
                                    {hourlyUnits.windgusts_10m[index]}
                                </td>
                                <td>
                                    {hourlyContent.temperature_80m[index]}
                                    {hourlyUnits.temperature_80m[index]}
                                </td>
                                <td>
                                    {hourlyContent.temperature_120m[index]}
                                    {hourlyUnits.temperature_120m[index]}
                                </td>
                                <td>
                                    {hourlyContent.temperature_180m[index]}
                                    {hourlyUnits.temperature_180m[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_temperature_0cm[index]}
                                    {hourlyUnits.soil_temperature_0cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_temperature_6cm[index]}
                                    {hourlyUnits.soil_temperature_6cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_temperature_18cm[index]}
                                    {hourlyUnits.soil_temperature_18cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_temperature_54cm[index]}
                                    {hourlyUnits.soil_temperature_54cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_moisture_0_1cm[index]}
                                    {hourlyUnits.soil_moisture_0_1cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_moisture_1_3cm[index]}
                                    {hourlyUnits.soil_moisture_1_3cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_moisture_3_9cm[index]}
                                    {hourlyUnits.soil_moisture_3_9cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_moisture_9_27cm[index]}
                                    {hourlyUnits.soil_moisture_9_27cm[index]}
                                </td>
                                <td>
                                    {hourlyContent.soil_moisture_27_81cm[index]}
                                    {hourlyUnits.soil_moisture_27_81cm[index]}
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
