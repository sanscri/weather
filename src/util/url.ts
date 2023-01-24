export const BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const LATITUDE_PARAMETER_NAME = "latitude";
export const LONGTUDE_PARAMETER_NAME = "longitude";
export const HOURLY_PARAMETER =
    "hourly=" +
    "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature," +
    "precipitation,rain,showers,snowfall,snow_depth,freezinglevel_height,weathercode,pressure_msl,surface_pressure," +
    "cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high" +
    ",visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,cape," +
    "windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m," +
    "windgusts_10m,temperature_80m,temperature_120m,temperature_180m," +
    "soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm," +
    "soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm";
export const DAILY_PARAMETER =
    "daily=" +
    "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min," +
    "sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours," +
    "windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&";
export const TIMEZONE_PARAMETER = "timezone=auto";
export const CURRENT_WEATHER = "current_weather=true";

// example YYYY-MM-DD
export const START_DATE_PARAMETER_NAME = "start_date";
export const END_DATE_PARAMETER_NAME = "start_date";
