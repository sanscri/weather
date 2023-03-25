import { DailyContent } from "./DailyContent";
import { DailyUnits } from "./DailyUnits";

export interface DailyResult {
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
    daily_units: DailyUnits;
    daily: DailyContent;
}
