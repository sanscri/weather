import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import "./App.css";
import { WeatherService } from "./service/weatherService";
import { WeatherResult } from "./types/weatherResult";
import parseISO from "date-fns/parseISO";
import Daily from "./component/Daily";
import Hourly from "./component/Hourly";
const App: React.FC = () => {
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });
    const [weather, setWeather] = useState<WeatherResult>();
    useEffect(() => {
        const weatherService = new WeatherService();
        if (coords?.longitude !== undefined && coords.latitude !== undefined) {
            void weatherService
                .getWeather(coords?.latitude, coords?.longitude)
                .then((currentWeather) => {
                    setWeather(currentWeather);
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
                    weather?.current_weather?.time ?? "",
                ).toLocaleDateString()}
            </div>
            <div>Температура: {weather?.current_weather?.temperature} °C</div>
            <div>
                Скорость ветра: {weather?.current_weather?.windspeed} Км/ч
            </div>
            <div>
                Направление ветра: {weather?.current_weather?.winddirection} °
            </div>
            <h1>Прогноз погоды на день</h1>
            {weather?.hourly != null && weather?.hourly_units != null && (
                <Hourly
                    hourlyContent={weather.hourly}
                    hourlyUnits={weather.hourly_units}
                />
            )}
            <h1>Прогноз погоды на неделю</h1>
            {weather?.daily != null && weather?.daily_units != null && (
                <Daily
                    dailyContent={weather.daily}
                    dailyUnits={weather.daily_units}
                />
            )}
        </div>
    );
};

export default App;
