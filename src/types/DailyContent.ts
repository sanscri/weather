export interface DailyContent {
    time: string[];
    /**
     * 	Maximum daily air temperature at 2 meters above ground
     */
    temperature_2m_max: number[];
    /**
     * Minimum daily air temperature at 2 meters above ground
     */
    temperature_2m_min: number[];
    /**
     * 	Maximum daily apparent temperature
     */
    apparent_temperature_max: number[];
    /**
     * 	Minimum daily apparent temperature
     */
    apparent_temperature_min: number[];
    /**
     * 	Sun rise times
     */
    sunrise: string[];
    /**
     * 	Sun set times
     */
    sunset: string[];
    /**
     * Sum of daily precipitation (including rain, showers and snowfall)
     */
    precipitation_sum: number[];
    /**
     * 	Sum of daily rain
     */
    rain_sum: number[];
    /**
     * 	Sum of daily showers
     */
    showers_sum: number[];
    /**
     * 	Sum of daily snowfall
     */
    snowfall_sum: number[];
    /**
     * The number of hours with rain
     */
    precipitation_hours: number[];
    /**
     * 	Maximum wind speed and gusts on a day
     */
    windspeed_10m_max: number[];
    /**
     * 	Maximum wind speed and gusts on a day
     */
    windgusts_10m_max: number[];
    /**
     * Dominant wind direction
     */
    winddirection_10m_dominant: number[];
    /**
     * 	The sum of solar radiation on a given day in Megajoules
     */
    shortwave_radiation_sum: number[];
}
