import {useGeolocated} from "react-geolocated";
import CurrentWeatherBlock from "../components/CurrentWeatherBlock.tsx";
import Hourly from "../components/Hourly.tsx";
import Daily from "../components/Daily.tsx";
import React from "react";

export const HomePage: React.FC = ()  =>{
  const { coords,  isGeolocationAvailable, isGeolocationEnabled  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  if(!isGeolocationAvailable) {
    return (
      <div>Your browser does not support Geolocation</div>
    );
  } else if(!isGeolocationEnabled) {
    return (<div>Geolocation is not enabled</div>);
  }
  return (
    <div>
      {coords &&
        coords.longitude !== undefined && (
          <CurrentWeatherBlock
            longitude={coords.longitude}
            latitude={coords.latitude}
          />
        )}
      <h1>Прогноз погоды на день</h1>
      {coords && (
          <Hourly
            longitude={coords.longitude}
            latitude={coords.latitude}
          />
        )}
      <h1>Прогноз погоды на неделю</h1>
      {coords && (
          <Daily
            longitude={coords.longitude}
            latitude={coords.latitude}
          />
        )}
    </div>

  );
}
