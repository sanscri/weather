export type HourlyContent = {
    time: string[];
    /**
     * Air temperature at 2 meters above ground
     */
    temperature_2m: number[];
    /**
     * Relative humidity at 2 meters above ground
     */
    relativehumidity_2m: number[];
    /**
     * Apparent temperature is the perceived feels-like temperature combining wind chill factor, relative humidity and solar radiation
     */
    apparent_temperature: number[];
    /**
     * Total cloud cover as an area fraction
     */
    cloudcover: number[];
    /**
     * Viewing distance in meters.
     * Influenced by low clouds, humidity and aerosols.
     * Maximum visibility is approximately 24 km.
     */
    visibility: number[];
    /**
     * Wind speed at 10 meters above ground.
     * Wind speed on 10 meters is the standard level.
     */
    windspeed_10m: number[];
    /**
     * 	Wind direction at 10 meters above ground
     */
    winddirection_10m: number[];
};
