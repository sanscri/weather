export type DailyContent = {
    time: Array<string>;
    weathercode: Array<string>;
    /**
     * 	Maximum daily air temperature at 2 meters above ground
     */
    temperature_2m_max: Array<number>;
    /**
     * Minimum daily air temperature at 2 meters above ground
     */
    temperature_2m_min: Array<number>;
    /**
     * 	Maximum daily apparent temperature
     */
    apparent_temperature_max: Array<number>;
    /**
     * 	Minimum daily apparent temperature
     */
    apparent_temperature_min: Array<number>;
    /**
     * 	Sun rise times
     */
    sunrise: Array<string>;
    /**
     * 	Sun set times
     */
    sunset: Array<string>;
    /**
     * Sum of daily precipitation (including rain, showers and snowfall)
     */
    precipitation_sum: Array<number>;
    /**
     * 	Sum of daily rain
     */
    rain_sum: Array<number>;
    /**
     * 	Sum of daily showers
     */
    showers_sum: Array<number>;
    /**
     * 	Sum of daily snowfall
     */
    snowfall_sum: Array<number>;
    /**
     * The number of hours with rain
     */
    precipitation_hours: Array<number>;
    /**
     * 	Maximum wind speed and gusts on a day
     */
    windspeed_10m_max: Array<number>;
    /**
     * 	Maximum wind speed and gusts on a day
     */
    windgusts_10m_max: Array<number>;
    /**
     * Dominant wind direction
     */
    winddirection_10m_dominant: Array<number>;
    /**
     * 	The sum of solar radiation on a given day in Megajoules
     */
    shortwave_radiation_sum: Array<number>;
};
