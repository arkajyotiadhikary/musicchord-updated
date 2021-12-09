import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import "./WeatherApp.css";
import axios from "axios";

const Api = {
    key: "d2311387e5b14755e3ec508375660f94",
    base: "http://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=",
};

const WeatherApp = () => {
    const [weather, setWeather] = useState({});
    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [cloud, setCloud] = useState("");

    let time = new Date();
    let min = time.getMinutes();

    setTimeout(() => {
        time = new Date();
        min = time.getMinutes();
    }, 1000);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const response = await axios.get(Api.base + Api.key);
                const clouds = response.data.clouds.all;
                setWeather(response.data);
                setTemp(response.data.main.temp - 273.15);
                setWind(response.data.wind.speed);
                setHumidity(response.data.main.humidity);
                setCloud(
                    clouds > 50
                        ? "Cloudy"
                        : clouds > 20
                        ? "Partially Cloudy"
                        : "Clear"
                );
            } catch (error) {
                console.log(error);
            }
        };
        getWeather();
    }, [min]);

    return (
        <div className="card border-0 ps-2 bg-transparent">
            <div className="card-body bg-light">
                <h2 className="weather-header">Weather</h2>
                <h3>{cloud}</h3>
                <span className="h5 text-secondary">
                    Wind {wind}km/h <span className="dot">•</span> Humidity{" "}
                    {humidity}%
                </span>
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <FontAwesomeIcon
                        className="h1 text-secondary"
                        icon={faCloudSun}
                    />
                    <div className="h1 text-secondary">{parseInt(temp)}°</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
