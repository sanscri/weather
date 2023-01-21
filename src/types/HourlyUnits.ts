export type HourlyUnits =  {
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
