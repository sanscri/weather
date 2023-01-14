export type WeatherResult = {
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
  current_weather: {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    time: string;
  },
  hourly_units: HourlyUnits;
  hourly: HourlyContent;
  daily_units: DailyUnits;
  daily: DailyContent;
}

type HourlyUnits =  {
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
  relativehumidity_2m: string;
  /**
   * Dew point temperature at 2 meters above ground
   * 	°C
   */
  dewpoint_2m: string;
  /**
   * 	°C (°F)	Apparent temperature is the perceived feels-like temperature combining wind chill factor,
   * 	relative humidity and solar radiation
   */
  apparent_temperature: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  snow_depth: string;
  freezinglevel_height: string;
  weathercode: string;
  pressure_msl: string;
  surface_pressure: string;
  cloudcover: string;
  cloudcover_low: string;
  cloudcover_mid: string;
  cloudcover_high: string;
  visibility: string;
  evapotranspiration: string;
  et0_fao_evapotranspiration: string;
  vapor_pressure_deficit: string;
  cape: string;
  windspeed_10m: string;
  windspeed_80m: string;
  windspeed_120m: string;
  windspeed_180m: string;
  winddirection_10m: string;
  winddirection_80m: string;
  winddirection_120m: string;
  winddirection_180m: string;
  windgusts_10m: string;
  temperature_80m: string;
  temperature_120m: string;
  temperature_180m: string;
  soil_temperature_0cm: string;
  soil_temperature_6cm: string;
  soil_temperature_18cm: string;
  soil_temperature_54cm: string;
  soil_moisture_0_1cm: string;
  soil_moisture_1_3cm: string;
  soil_moisture_3_9cm: string;
  soil_moisture_9_27cm: string;
  soil_moisture_27_81cm: string;
};
type HourlyContent = {
  time: Array<number>;
  /**
   * Air temperature at 2 meters above ground
   */
  temperature_2m: Array<number>;
  /**
   * Relative humidity at 2 meters above ground
   */
  relativehumidity_2m: Array<number>;
  /**
   * Dew point temperature at 2 meters above ground
   */
  dewpoint_2m: Array<number>;
  /**
   * Apparent temperature is the perceived feels-like temperature combining wind chill factor, relative humidity and solar radiation
   */
  apparent_temperature: Array<number>;
  /**
   * Total precipitation (rain, showers, snow) sum of the preceding hour
   */
  precipitation: Array<number>;
  /**
   * Rain from large scale weather systems of the preceding hour in millimeter
   */
  rain: Array<number>;
  /**
   * Showers from convective precipitation in millimeters from the preceding hour
   */
  showers: Array<number>;
  /**
   *  (inch)	Snowfall amount of the preceding hour in centimeters.
   *  For the water equivalent in millimeter, divide by 7.
   *  E.g. 7 cm snow = 10 mm precipitation water equivalent
   */
  snowfall: Array<number>;
  /**
   * Snow depth on the ground
   */
  snow_depth: Array<number>;
  /**
   * Altitude above sea level of the 0°C level
   */
  freezinglevel_height: Array<number>;
  /**
   * The most severe weather condition on a given day
   */
  weathercode: Array<number>;
  /**
   * Atmospheric air pressure reduced to mean sea level (msl) or pressure at surface.
   * Typically pressure on mean sea level is used in meteorology.
   * Surface pressure gets lower with increasing elevation.
   */
  pressure_msl: Array<number>;
  /**
   * Atmospheric air pressure reduced to mean sea level (msl) or pressure at surface.
   * Typically pressure on mean sea level is used in meteorology.
   * Surface pressure gets lower with increasing elevation.
   */
  surface_pressure: Array<number>;
  /**
   * Total cloud cover as an area fraction
   */
  cloudcover: Array<number>;
  /**
   * Low level clouds and fog up to 3 km altitude
   */
  cloudcover_low: Array<number>;
  /**
   * 	Mid level clouds from 3 to 8 km altitude
   */
  cloudcover_mid: Array<number>;
  /**
   * High level clouds from 8 km altitude
   */
  cloudcover_high: Array<number>;
  /**
   * Viewing distance in meters.
   * Influenced by low clouds, humidity and aerosols.
   * Maximum visibility is approximately 24 km.
   */
  visibility: Array<number>;
  /**
   * Evapotranspration from land surface and plants that weather models assumes for this location.
   * Available soil water is considered. 1 mm evapotranspiration per hour equals 1 liter of water per spare meter.
   */
  evapotranspiration: Array<number>;
  /**
   * ET₀ Reference Evapotranspiration of a well watered grass field.
   * Based on FAO-56 Penman-Monteith equations ET₀ is calculated from temperature, wind speed, humidity and solar radiation.
   * Unlimited soil water is assumed.
   * ET₀ is commonly used to estimate the required irrigation for plants.
   */
  et0_fao_evapotranspiration: Array<number>;
  /**
   * 	Vapor Pressure Deficit (VPD) in kilopascal (kPa).
   * 	For high VPD (>1.6), water transpiration of plants increases.
   * 	For low VPD (<0.4), transpiration decreases
   */
  vapor_pressure_deficit: Array<number>;
  /**
   * Convective available potential energy. See Wikipedia.
   */
  cape: Array<number>;
  /**
   * Wind speed at 10 meters above ground.
   * Wind speed on 10 meters is the standard level.
   */
  windspeed_10m: Array<number>;
  /**
   * Wind speed at 80 meters above ground.
   * Wind speed on 10 meters is the standard level.
   */
  windspeed_80m: Array<number>;
  /**
   * Wind speed at 120 meters above ground.
   * Wind speed on 10 meters is the standard level.
   */
  windspeed_120m: Array<number>;
  /**
   * Wind speed at 180 meters above ground.
   * Wind speed on 10 meters is the standard level.
   */
  windspeed_180m: Array<number>;
  /**
   * 	Wind direction at 10 meters above ground
   */
  winddirection_10m: Array<number>;
  /**
   * 	Wind direction at 80 meters above ground
   */
  winddirection_80m: Array<number>;
  /**
   * 	Wind direction at 1200 meters above ground
   */
  winddirection_120m: Array<number>;
  /**
   * 	Wind direction at 180 meters above ground
   */
  winddirection_180m: Array<number>;
  /**
   * Gusts at 10 meters above ground as a maximum of the preceding hour
   */
  windgusts_10m: Array<number>;
  temperature_80m: Array<number>;
  temperature_120m: Array<number>;
  temperature_180m: Array<number>;
  /**
   * 	Temperature in the soil at 0, 6, 18 and 54 cm depths.
   * 	0 cm is the surface temperature on land or water surface temperature on water.
   */
  soil_temperature_0cm: Array<number>;
  /**
   * 	Temperature in the soil at 0, 6, 18 and 54 cm depths.
   * 	0 cm is the surface temperature on land or water surface temperature on water.
   */
  soil_temperature_6cm: Array<number>;
  /**
   * 	Temperature in the soil at 0, 6, 18 and 54 cm depths.
   * 	0 cm is the surface temperature on land or water surface temperature on water.
   */
  soil_temperature_18cm: Array<number>;
  /**
   * 	Temperature in the soil at 0, 6, 18 and 54 cm depths.
   * 	0 cm is the surface temperature on land or water surface temperature on water.
   */
  soil_temperature_54cm: Array<number>;
  /**
   * Average soil water content as volumetric mixing ratio at 0-1, 1-3, 3-9, 9-27 and 27-81 cm depths.
   */
  soil_moisture_0_1cm: Array<number>;
  /**
   * Average soil water content as volumetric mixing ratio at 0-1, 1-3, 3-9, 9-27 and 27-81 cm depths.
   */
  soil_moisture_1_3cm: Array<number>;
  /**
   * Average soil water content as volumetric mixing ratio at 0-1, 1-3, 3-9, 9-27 and 27-81 cm depths.
   */
  soil_moisture_3_9cm: Array<number>;
  /**
   * Average soil water content as volumetric mixing ratio at 0-1, 1-3, 3-9, 9-27 and 27-81 cm depths.
   */
  soil_moisture_9_27cm: Array<number>;
  /**
   * Average soil water content as volumetric mixing ratio at 0-1, 1-3, 3-9, 9-27 and 27-81 cm depths.
   */
  soil_moisture_27_81cm: Array<number>;
};
type DailyUnits = {
  time: string;
  weathercode: string;
  temperature_2m_max:string;
  temperature_2m_min:string;
  apparent_temperature_max:string;
  apparent_temperature_min:string;
  sunrise:string;
  sunset:string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  snowfall_sum: string;
  precipitation_hours: string;
  windspeed_10m_max: string;
  windgusts_10m_max: string;
  winddirection_10m_dominant: string;
  shortwave_radiation_sum: string;
};
type DailyContent = {
  time: Array<string>
  weathercode: Array<string>;
  /**
   * 	Maximum and minimum daily air temperature at 2 meters above ground
   */
  temperature_2m_max: Array<number>;
  /**
   * 	Maximum and minimum daily air temperature at 2 meters above ground
   */
  temperature_2m_min: Array<number>;
  /**
   * 	Maximum and minimum daily apparent temperature
   */
  apparent_temperature_max: Array<number>;
  /**
   * 	Maximum and minimum daily apparent temperature
   */
  apparent_temperature_min: Array<number>;
  /**
   * 	Sun rise and set times
   */
  sunrise: Array<string>;
  /**
   * 	Sun rise and set times
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