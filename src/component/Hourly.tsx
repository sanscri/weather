import React from "react";
import {HourlyContent} from "../types/HourlyContent";
import {HourlyUnits} from "../types/HourlyUnits";
import Chart from "./Chart";
import parseISO from "date-fns/parseISO";
type HourlyProps = {
  hourlyContent: HourlyContent;
  hourlyUnits: HourlyUnits;

}
const Hourly: React.FC<HourlyProps> = (props) => {
  const {hourlyContent, hourlyUnits} = props;
  const COUNT = 168;
  return (<div>{hourlyContent.time.map((item, index) =>
    (<div>
      {parseISO(item).toLocaleString()}
      <p>{hourlyContent.temperature_2m[index]}{hourlyUnits.temperature_2m[index]}</p>
      <p>{hourlyContent.relativehumidity_2m[index]}{hourlyUnits.relativehumidity_2m[index]}</p>
      <p>{hourlyContent.dewpoint_2m[index]}{hourlyUnits.dewpoint_2m[index]}</p>
      <p>{hourlyContent.apparent_temperature[index]}{hourlyUnits.apparent_temperature[index]}</p>
      <p>{hourlyContent.precipitation[index]}{hourlyUnits.precipitation[index]}</p>
      <p>{hourlyContent.rain[index]}{hourlyUnits.rain[index]}</p>
      <p>{hourlyContent.showers[index]}{hourlyUnits.showers[index]}</p>
      <p>{hourlyContent.snowfall[index]}{hourlyUnits.snowfall[index]}</p>
      <p>{hourlyContent.snow_depth[index]}{hourlyUnits.snow_depth[index]}</p>
      <p>{hourlyContent.freezinglevel_height[index]}{hourlyUnits.freezinglevel_height[index]}</p>
      <p>{hourlyContent.pressure_msl[index]}{hourlyUnits.pressure_msl[index]}</p>
      <p>{hourlyContent.surface_pressure[index]}{hourlyUnits.surface_pressure[index]}</p>
      <p>{hourlyContent.cloudcover[index]}{hourlyUnits.cloudcover[index]}</p>
      <p>{hourlyContent.cloudcover_low[index]}{hourlyUnits.cloudcover_low[index]}</p>
      <p>{hourlyContent.cloudcover_mid[index]}{hourlyUnits.cloudcover_mid[index]}</p>
      <p>{hourlyContent.cloudcover_high[index]}{hourlyUnits.cloudcover_high[index]}</p>
      <p>{hourlyContent.visibility[index]}{hourlyUnits.visibility[index]}</p>
      <p>{hourlyContent.evapotranspiration[index]}{hourlyUnits.evapotranspiration[index]}</p>
      <p>{hourlyContent.et0_fao_evapotranspiration[index]}{hourlyUnits.et0_fao_evapotranspiration[index]}</p>
      <p>{hourlyContent.vapor_pressure_deficit[index]}{hourlyUnits.vapor_pressure_deficit[index]}</p>
      <p>{hourlyContent.cape[index]}{hourlyUnits.cape[index]}</p>
      <p>{hourlyContent.windspeed_10m[index]}{hourlyUnits.windspeed_10m[index]}</p>
      <p>{hourlyContent.windspeed_80m[index]}{hourlyUnits.windspeed_80m[index]}</p>
      <p>{hourlyContent.windspeed_120m[index]}{hourlyUnits.windspeed_120m[index]}</p>
      <p>{hourlyContent.windspeed_180m[index]}{hourlyUnits.windspeed_180m[index]}</p>
      <p>{hourlyContent.winddirection_10m[index]}{hourlyUnits.winddirection_10m[index]}</p>
      <p>{hourlyContent.winddirection_80m[index]}{hourlyUnits.winddirection_80m[index]}</p>
      <p>{hourlyContent.winddirection_120m[index]}{hourlyUnits.winddirection_120m[index]}</p>
      <p>{hourlyContent.winddirection_180m[index]}{hourlyUnits.winddirection_180m[index]}</p>
      <p>{hourlyContent.windgusts_10m[index]}{hourlyUnits.windgusts_10m[index]}</p>
      <p>{hourlyContent.temperature_80m[index]}{hourlyUnits.temperature_80m[index]}</p>
      <p>{hourlyContent.temperature_120m[index]}{hourlyUnits.temperature_120m[index]}</p>
      <p>{hourlyContent.temperature_180m[index]}{hourlyUnits.temperature_180m[index]}</p>
      <p>{hourlyContent.soil_temperature_0cm[index]}{hourlyUnits.soil_temperature_0cm[index]}</p>
      <p>{hourlyContent.soil_temperature_6cm[index]}{hourlyUnits.soil_temperature_6cm[index]}</p>
      <p>{hourlyContent.soil_temperature_18cm[index]}{hourlyUnits.soil_temperature_18cm[index]}</p>
      <p>{hourlyContent.soil_temperature_54cm[index]}{hourlyUnits.soil_temperature_54cm[index]}</p>
      <p>{hourlyContent.soil_moisture_0_1cm[index]}{hourlyUnits.soil_moisture_0_1cm[index]}</p>
      <p>{hourlyContent.soil_moisture_1_3cm[index]}{hourlyUnits.soil_moisture_1_3cm[index]}</p>
      <p>{hourlyContent.soil_moisture_3_9cm[index]}{hourlyUnits.soil_moisture_3_9cm[index]}</p>
      <p>{hourlyContent.soil_moisture_9_27cm[index]}{hourlyUnits.soil_moisture_9_27cm[index]}</p>
      <p>{hourlyContent.soil_moisture_27_81cm[index]}{hourlyUnits.soil_moisture_27_81cm[index]}</p>
    </div>))}
  </div>);
}

export default Hourly;
