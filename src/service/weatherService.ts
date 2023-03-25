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
import { HourlyResult } from "../types/HourlyResult";
import { CurrentWeather } from "../types/CurrentWeather";
import { DailyResult } from "../types/DailyResult";

export class WeatherService {
    public async getWeather(
        latitude: number,
        longitude: number,
    ): Promise<WeatherResult> {
        const url = `${BASE_URL}?${LATITUDE_PARAMETER_NAME}=${latitude}&${LONGTUDE_PARAMETER_NAME}=${longitude}&${HOURLY_PARAMETER}&${DAILY_PARAMETER}&${TIMEZONE_PARAMETER}&${CURRENT_WEATHER}`;
        return await fetch(url).then(async (result) => await result.json());
    }

    public async gerHourlyWeather(
        latitude: number,
        longitude: number,
        startDate: string,
        endDate: string,
    ): Promise<HourlyResult> {
        const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&${HOURLY_PARAMETER}&timezone=auto&start_date=${startDate}&end_date=${endDate}`;
        return await fetch(url).then(async (result) => await result.json());
    }

    public async getDailyWeather(
        latitude: number,
        longitude: number,
        startDate: string,
        endDate: string,
    ): Promise<DailyResult> {
        const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&${DAILY_PARAMETER}&timezone=auto&start_date=${startDate}&end_date=${endDate}`;
        return await fetch(url).then(async (result) => await result.json());
    }

    public async getCurrentWeather(
        latitude: number,
        longitude: number,
    ): Promise<CurrentWeather> {
        const url = `${BASE_URL}?${LATITUDE_PARAMETER_NAME}=${latitude}&${LONGTUDE_PARAMETER_NAME}=${longitude}&${CURRENT_WEATHER}`;
        return await fetch(url).then(async (result) => await result.json());
    }
}
