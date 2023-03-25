import React from "react";
import { DailyContent } from "../types/DailyContent";
import { DailyUnits } from "../types/DailyUnits";
import parseISO from "date-fns/parseISO";
import { WeatherService } from "../service/weatherService";
import { format } from "date-fns";

interface DailyProps {
    latitude: number;
    longitude: number;
}

interface DayBlockProps {
    time: string;

    temperature_2m_max: string;

    temperature_2m_min: string;

    apparent_temperature_max: string;

    apparent_temperature_min: string;
    sunrise: string;

    sunset: string;

    precipitation_sum: string;

    rain_sum: string;

    showers_sum: string;

    snowfall_sum: string;

    precipitation_hours: string;

    windspeed_10m_max: string;

    windgusts_10m_max: string;

    winddirection_10m_dominant: string;

    shortwave_radiation_sum: string;
}
const DayBlock: React.FC<DayBlockProps> = (props) => {
    return (
        <div>
            <h2>{props.time}</h2>
            <p>
                Минимальная суточная температура воздуха на высоте 2 метра над
                землей: {props.temperature_2m_min}
            </p>
            <p>
                Максимальная суточная температура воздуха на высоте 2 метра над
                землей {props.temperature_2m_max}
            </p>
            <p>
                Минимальная дневная кажущаяся температура{" "}
                {props.apparent_temperature_min}
            </p>
            <p>
                Максимальная дневная кажущаяся температура{" "}
                {props.apparent_temperature_max}
            </p>
            <p>Восход: {props.sunrise}</p>
            <p>Закат: {props.sunset}</p>
            <p>
                Сумма дневных осадков (включая дождь, ливни и снегопад):{" "}
                {props.precipitation_sum}
            </p>
            <p>Сумма дневного дождя: {props.rain_sum}</p>
            <p>Сумма ежедневных ливней: {props.showers_sum}</p>
            <p>Сумма дневного снегопада:{props.snowfall_sum}</p>
            <p>Количество часов с дождём: {props.precipitation_hours}</p>
            <p>
                Максимальная скорость ветра в сутки: {props.windspeed_10m_max}
            </p>
            <p>
                Максимальная скорость порывов ветра за сутки:{" "}
                {props.windgusts_10m_max}
            </p>
            <p>
                Господствующее направление ветра:{" "}
                {props.winddirection_10m_dominant}
            </p>
            <p>
                Сумма солнечной радиации в данный день в мегаджоулях:{" "}
                {props.shortwave_radiation_sum}
            </p>
        </div>
    );
};
const Daily: React.FC<DailyProps> = (props) => {
    const [dailyUnits, setDailyUnits] = React.useState<DailyUnits>();
    const [dailyContent, setDailyContent] = React.useState<DailyContent>();
    React.useEffect(() => {
        const weatherService = new WeatherService();
        const today = new Date();
        const startDate = format(today, "yyyy-MM-dd");
        const endDate = format(
            today.setDate(today.getDate() + 7),
            "yyyy-MM-dd",
        );
        void weatherService
            .getDailyWeather(
                props.latitude,
                props.longitude,
                startDate,
                endDate,
            )
            .then((result) => {
                setDailyUnits(result.daily_units);
                setDailyContent(result.daily);
            });
    }, []);
    return (
        <div>
            {dailyUnits !== undefined &&
                dailyContent !== undefined &&
                dailyContent.time.map((item, index) => (
                    <DayBlock
                        key={index}
                        time={dailyContent.time[index]}
                        temperature_2m_max={`${dailyContent.temperature_2m_max[index]}${dailyUnits?.temperature_2m_max}`}
                        temperature_2m_min={`${dailyContent.temperature_2m_min[index]}${dailyUnits.temperature_2m_min}`}
                        apparent_temperature_max={`${dailyContent.apparent_temperature_max[index]}${dailyUnits.apparent_temperature_max}`}
                        apparent_temperature_min={`${dailyContent.apparent_temperature_min[index]}${dailyUnits.apparent_temperature_min}`}
                        sunrise={`${parseISO(
                            dailyContent.sunrise[index],
                        ).toLocaleString("ru-RU")}`}
                        sunset={`${parseISO(
                            dailyContent.sunset[index],
                        ).toLocaleString("ru-RU")}`}
                        precipitation_sum={`${dailyContent.precipitation_sum[index]}${dailyUnits.precipitation_sum}`}
                        rain_sum={`${dailyContent.rain_sum[index]}${dailyUnits.rain_sum}`}
                        showers_sum={`${dailyContent.showers_sum[index]}${dailyUnits.showers_sum}`}
                        snowfall_sum={`${dailyContent.snowfall_sum[index]}${dailyUnits.snowfall_sum}`}
                        precipitation_hours={`${dailyContent.precipitation_hours[index]}${dailyUnits.precipitation_hours}`}
                        windspeed_10m_max={`${dailyContent.windspeed_10m_max[index]}${dailyUnits.windspeed_10m_max}`}
                        windgusts_10m_max={`${dailyContent.windgusts_10m_max[index]}${dailyUnits.windgusts_10m_max}`}
                        winddirection_10m_dominant={`${dailyContent.winddirection_10m_dominant[index]}${dailyUnits.winddirection_10m_dominant}`}
                        shortwave_radiation_sum={`${dailyContent.shortwave_radiation_sum[index]}${dailyUnits.shortwave_radiation_sum}`}
                    />
                ))}
        </div>
    );
};

export default Daily;
