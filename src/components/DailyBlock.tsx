import React from "react";

interface DayBlockProps {
    time: string;

    temperature_2m_max: string;

    temperature_2m_min: string;

    apparent_temperature_max: string;

    apparent_temperature_min: string;
    sunrise: Date;

    sunset: Date;

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
export const DayBlock: React.FC<DayBlockProps> = (props) => {
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
            <p>Восход: {props.sunrise.toLocaleString("ru-RU")}</p>
            <p>Закат: {props.sunset.toLocaleString("ru-RU")}</p>
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
