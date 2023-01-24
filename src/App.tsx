import React from "react";
import { useGeolocated } from "react-geolocated";
import "./App.css";
import parseISO from "date-fns/parseISO";
import Hourly from "./component/Hourly";
import { WeatherService } from "./service/weatherService";
import { CurrentWeather } from "./types/CurrentWeather";
const App: React.FC = () => {
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });
    const [currentWeather, setCurrentWeather] =
        React.useState<CurrentWeather>();
    React.useEffect(() => {
        if (coords?.latitude !== undefined && coords?.longitude !== undefined) {
            const weatherService = new WeatherService();
            void weatherService
                .getCurrentWeather(coords.latitude, coords.longitude)
                .then((result) => {
                    setCurrentWeather(result);
                });
        }
    }, [coords]);
    return (
        <div>
            <div>Широта: {coords?.latitude}</div>
            <div>Долгота: {coords?.longitude}</div>
            <h1>Текущая погода</h1>
            <div>
                Время:{" "}
                {parseISO(
                    currentWeather?.current_weather?.time ?? "",
                ).toLocaleDateString()}
            </div>
            <div>
                Температура: {currentWeather?.current_weather?.temperature} °C
            </div>
            <div>
                Скорость ветра: {currentWeather?.current_weather?.windspeed}{" "}
                Км/ч
            </div>
            <div>
                Направление ветра:{" "}
                {currentWeather?.current_weather?.winddirection} °
            </div>
            <h1>Прогноз погоды на день</h1>
            {undefined !== coords?.latitude &&
                coords.longitude !== undefined && (
                    <Hourly
                        longitude={coords.longitude}
                        latitude={coords.latitude}
                    />
                )}
            <h1>Прогноз погоды на неделю</h1>
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
