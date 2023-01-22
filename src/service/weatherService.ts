import {
    BASE_URL,
    CURRENT_WEATHER,
    DAILY_PARAMETER,
    HOURLY_PARAMETER,
    LATITUDE_PARAMETER_NAME,
    LONGTUDE_PARAMETER_NAME,
    TIMEZONE_PARAMETER,
} from "../util/url";
import { WeatherResult } from "../types/weatherResult";

export class WeatherService {
    public async getWeather(
        latitude: number,
        longitude: number,
    ): Promise<WeatherResult> {
        const url = `${BASE_URL}?${LATITUDE_PARAMETER_NAME}=${latitude}&${LONGTUDE_PARAMETER_NAME}=${longitude}&${HOURLY_PARAMETER}&${DAILY_PARAMETER}&${TIMEZONE_PARAMETER}&${CURRENT_WEATHER}`;
        return await fetch(url).then(async (result) => await result.json());
    }
}
