import React from "react";
import {useGeolocated} from "react-geolocated";

export const ThreeDaysPage: React.FC = () => {
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
      <h1>
        Погода на 3 дня
      </h1>
      <h2>
        Координаты
      </h2>
      <p>Широта: {coords?.latitude}</p>
      <p>Долгота: {coords?.longitude}</p>
    </div>);
};
