export type HourlyUnits = {
    time: string;
    /**
     * Air temperature at 2 meters above ground
     * °C
     */
    temperature_2m: string;
    /**
     * 	Relative humidity at 2 meters above ground
     * 	%
     */
    apparent_temperature: string;
    relativehumidity_2m: string;
    cloudcover: string;
    visibility: string;
    windspeed_10m: string;
    winddirection_10m: string;
};
