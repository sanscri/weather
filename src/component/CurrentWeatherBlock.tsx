import React from "react";
import { WeatherService } from "../service/weatherService";
import parseISO from "date-fns/parseISO";
import { type CurrentWeather } from "../types/CurrentWeather";

interface CurrentWeatherProps {
    latitude: number;
    longitude: number;
}
const CurrentWeatherBlock: React.FC<CurrentWeatherProps> = (props) => {
    const { latitude, longitude } = props;
    const [currentWeather, setCurrentWeather] =
        React.useState<CurrentWeather>();
    React.useEffect(() => {
        const weatherService = new WeatherService();
        void weatherService
            .getCurrentWeather(latitude, longitude)
            .then((result) => {
                setCurrentWeather(result);
            });
    }, []);
    return (
        <div>
            <h1>Погода на сегодня</h1>
            <div>Широта: {currentWeather?.latitude}</div>
            <div>Долгота: {currentWeather?.longitude}</div>
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
        </div>
    );
};

export default CurrentWeatherBlock;
