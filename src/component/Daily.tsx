import React from "react";
import { DailyContent } from "../types/DailyContent";
import { DailyUnits } from "../types/DailyUnits";
import parseISO from "date-fns/parseISO";

interface DailyProps {
    dailyContent: DailyContent;
    dailyUnits: DailyUnits;
}

interface DayBlockProps {
    time: string;
    weathercode: string;

    temperature_2m_max: number;

    temperature_2m_min: number;

    apparent_temperature_max: number;

    apparent_temperature_min: number;
    sunrise: string;

    sunset: string;

    precipitation_sum: number;

    rain_sum: number;

    showers_sum: number;

    snowfall_sum: number;

    precipitation_hours: number;

    windspeed_10m_max: number;

    windgusts_10m_max: number;

    winddirection_10m_dominant: number;

    shortwave_radiation_sum: number;
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
            <p>Восход: {parseISO(props.sunrise).toLocaleString("ru-RU")}</p>
            <p>Закат: {parseISO(props.sunset).toLocaleString("ru-RU")}</p>
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
    const { dailyContent } = props;

    return (
        <div>
            {dailyContent.time.map((item, index) => (
                <DayBlock
                    key={index}
                    time={dailyContent.time[index]}
                    weathercode={dailyContent.weathercode[index]}
                    temperature_2m_max={dailyContent.temperature_2m_max[index]}
                    temperature_2m_min={dailyContent.temperature_2m_min[index]}
                    apparent_temperature_max={
                        dailyContent.apparent_temperature_max[index]
                    }
                    apparent_temperature_min={
                        dailyContent.apparent_temperature_min[index]
                    }
                    sunrise={dailyContent.sunrise[index]}
                    sunset={dailyContent.sunset[index]}
                    precipitation_sum={dailyContent.precipitation_sum[index]}
                    rain_sum={dailyContent.rain_sum[index]}
                    showers_sum={dailyContent.showers_sum[index]}
                    snowfall_sum={dailyContent.snowfall_sum[index]}
                    precipitation_hours={
                        dailyContent.precipitation_hours[index]
                    }
                    windspeed_10m_max={dailyContent.windspeed_10m_max[index]}
                    windgusts_10m_max={dailyContent.windgusts_10m_max[index]}
                    winddirection_10m_dominant={
                        dailyContent.winddirection_10m_dominant[index]
                    }
                    shortwave_radiation_sum={
                        dailyContent.shortwave_radiation_sum[index]
                    }
                />
            ))}
        </div>
    );
};

export default Daily;
