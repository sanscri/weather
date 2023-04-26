import { type HourlyUnits } from "./HourlyUnits";
import { type HourlyContent } from "./HourlyContent";
import { type DailyUnits } from "./DailyUnits";
import { type DailyContent } from "./DailyContent";

export type WeatherResult = {
    latitude: number;
    longitude: number;
    /**
     * Generation time of the weather forecast in milliseconds.
     * This is mainly used for performance monitoring and improvements.
     */
    generationtime_ms: number;

    /**
     * Applied timezone offset from the &timezone= parameter
     */
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    /**
     * The elevation in meters of the selected weather grid-cell.
     * In mountain terrain it might differ from the location you would expect.
     */
    elevation: number;
    /**
     * Current weather conditions with the attribute
     */
    current_weather: {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        time: string;
    };
    hourly_units: HourlyUnits;
    hourly: HourlyContent;
    daily_units: DailyUnits;
    daily: DailyContent;
};
