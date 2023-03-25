export interface HourlyContent {
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
     * Dew point temperature at 2 meters above ground
     */
    dewpoint_2m: number[];
    /**
     * Apparent temperature is the perceived feels-like temperature combining wind chill factor, relative humidity and solar radiation
     */
    apparent_temperature: number[];
    /**
     * Total precipitation (rain, showers, snow) sum of the preceding hour
     */
    precipitation: number[];
    /**
     * Rain from large scale weather systems of the preceding hour in millimeter
     */
    rain: number[];
    /**
     * Showers from convective precipitation in millimeters from the preceding hour
     */
    showers: number[];
    /**
     *  (inch)	Snowfall amount of the preceding hour in centimeters.
     *  For the water equivalent in millimeter, divide by 7.
     *  E.g. 7 cm snow = 10 mm precipitation water equivalent
     */
    snowfall: number[];
    /**
     * Snow depth on the ground
     */
    snow_depth: number[];
    /**
     * Altitude above sea level of the 0°C level
     */
    freezinglevel_height: number[];
    /**
     * Atmospheric air pressure reduced to mean sea level (msl) or pressure at surface.
     * Typically pressure on mean sea level is used in meteorology.
     * Surface pressure gets lower with increasing elevation.
     */
    pressure_msl: number[];
    /**
     * Atmospheric air pressure reduced to mean sea level (msl) or pressure at surface.
     * Typically pressure on mean sea level is used in meteorology.
     * Surface pressure gets lower with increasing elevation.
     */
    surface_pressure: number[];
    /**
     * Total cloud cover as an area fraction
     */
    cloudcover: number[];
    /**
     * Low level clouds and fog up to 3 km altitude
     */
    cloudcover_low: number[];
    /**
     * 	Mid level clouds from 3 to 8 km altitude
     */
    cloudcover_mid: number[];
    /**
     * High level clouds from 8 km altitude
     */
    cloudcover_high: number[];
    /**
     * Viewing distance in meters.
     * Influenced by low clouds, humidity and aerosols.
     * Maximum visibility is approximately 24 km.
     */
    visibility: number[];
    /**
     * Evapotranspration from land surface and plants that weather models assumes for this location.
     * Available soil water is considered. 1 mm evapotranspiration per hour equals 1 liter of water per spare meter.
     */
    evapotranspiration: number[];
    /**
     * 	Vapor Pressure Deficit (VPD) in kilopascal (kPa).
     * 	For high VPD (>1.6), water transpiration of plants increases.
     * 	For low VPD (<0.4), transpiration decreases
     */
    vapor_pressure_deficit: number[];
    /**
     * Convective available potential energy. See Wikipedia.
     */
    cape: number[];
    /**
     * Wind speed at 10 meters above ground.
     * Wind speed on 10 meters is the standard level.
     */
    windspeed_10m: number[];
    /**
     * Wind speed at 80 meters above ground.
     * Wind speed on 10 meters is the standard level.
     */
    windspeed_80m: number[];
    /**
     * Wind speed at 120 meters above ground.
     * Wind speed on 10 meters is the standard level.
     */
    windspeed_120m: number[];
    /**
     * Wind speed at 180 meters above ground.
     * Wind speed on 10 meters is the standard level.
     */
    windspeed_180m: number[];
    /**
     * 	Wind direction at 10 meters above ground
     */
    winddirection_10m: number[];
    /**
     * 	Wind direction at 80 meters above ground
     */
    winddirection_80m: number[];
    /**
     * 	Wind direction at 120 meters above ground
     */
    winddirection_120m: number[];
    /**
     * 	Wind direction at 180 meters above ground
     */
    winddirection_180m: number[];
    /**
     * Gusts at 10 meters above ground as a maximum of the preceding hour
     */
    windgusts_10m: number[];
    temperature_80m: number[];
    temperature_120m: number[];
    temperature_180m: number[];
}
