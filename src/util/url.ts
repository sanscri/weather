export const BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const LATITUDE_PARAMETER_NAME = "latitude";
export const LONGTUDE_PARAMETER_NAME = "longitude";
export const HOURLY_PARAMETER =
    "hourly=" +
    "temperature_2m,relativehumidity_2m,apparent_temperature," +
    "cloudcover,visibility,windspeed_10m,winddirection_10m";
export const DAILY_PARAMETER =
    "daily=" +
    "temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min," +
    "sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours," +
    "windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum";
export const TIMEZONE_PARAMETER = "timezone=auto";
export const CURRENT_WEATHER = "current_weather=true";

// example YYYY-MM-DD
export const START_DATE_PARAMETER_NAME = "start_date";
export const END_DATE_PARAMETER_NAME = "start_date";
