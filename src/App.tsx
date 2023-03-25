import React from "react";
import { useGeolocated } from "react-geolocated";
import Hourly from "./component/Hourly";
import Daily from "./component/Daily";
import "./App.css";
import CurrentWeatherBlock from "./component/CurrentWeatherBlock";

const App: React.FC = () => {
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    return (
        <div>
            {undefined !== coords?.latitude &&
                coords.longitude !== undefined && (
                    <CurrentWeatherBlock
                        longitude={coords.longitude}
                        latitude={coords.latitude}
                    />
                )}
            <h1>Прогноз погоды на день</h1>
            {undefined !== coords?.latitude &&
                coords.longitude !== undefined && (
                    <Hourly
                        longitude={coords.longitude}
                        latitude={coords.latitude}
                    />
                )}
            <h1>Прогноз погоды на неделю</h1>
            {undefined !== coords?.latitude &&
                coords.longitude !== undefined && (
                    <Daily
                        longitude={coords.longitude}
                        latitude={coords.latitude}
                    />
                )}
        </div>
    );
};

export default App;

/**
 *  {weather?.daily != null && weather?.daily_units != null && (
 *                 <Daily
 *                     dailyContent={weather.daily}
 *                     dailyUnits={weather.daily_units}
 *                 />
 *             )}
 */
