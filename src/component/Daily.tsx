import React from "react";
import { type DailyContent } from "../types/DailyContent";
import { type DailyUnits } from "../types/DailyUnits";
import parseISO from "date-fns/parseISO";
import { WeatherService } from "../service/weatherService";
import { format } from "date-fns";
import { DayBlock } from "./DailyBlock";

interface DailyProps {
    latitude: number;
    longitude: number;
}

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
            <h1>Прогноз погоды на 7 дней</h1>
            {dailyUnits !== undefined &&
                dailyContent !== undefined &&
                dailyContent?.time?.map((item, index) => (
                    <DayBlock
                        key={index}
                        time={dailyContent.time[index]}
                        temperature_2m_max={`${dailyContent.temperature_2m_max[index]}${dailyUnits?.temperature_2m_max}`}
                        temperature_2m_min={`${dailyContent.temperature_2m_min[index]}${dailyUnits.temperature_2m_min}`}
                        apparent_temperature_max={`${dailyContent.apparent_temperature_max[index]}${dailyUnits.apparent_temperature_max}`}
                        apparent_temperature_min={`${dailyContent.apparent_temperature_min[index]}${dailyUnits.apparent_temperature_min}`}
                        sunrise={parseISO(dailyContent.sunrise[index])}
                        sunset={parseISO(dailyContent.sunset[index])}
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

/**
 * sunrise={`${parseISO(
 *                             dailyContent.sunrise[index],
 *                         ).toLocaleString("ru-RU")}`}
 *                         sunset={`${parseISO(
 *                             dailyContent.sunset[index],
 *                         ).toLocaleString("ru-RU")}`}
 */
