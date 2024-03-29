import React from "react"
import "./Weather.css"

export const Weather = ({
    name,
    weather,
    temp,
    feels_like,
    visibility,
    wind_speed,
    wind_degree,
    clouds,
    country,
    sunrise,
    sunset
}) => {
    const iconUrl = "https://openweathermap.org/img/wn";
    return (
        <div className={"weather__container"}>
            <h2>
                {name}, {country}
            </h2>
            <h2>{temp.toFixed(0)} ℃</h2>
            <p>Feels like: {feels_like.toFixed(0)} ℃</p>
            {weather.map(({ description, main, icon}, i) => (
                <p key={i}>
                    <img src={`${iconUrl}/${icon}@2x.png`} alt="" />
                    <br />
                    <b>{main}</b>
                    <br />
                    {description}
                </p>
            ))}
            <p>
                {wind_degree} {wind_speed}
            </p>
        </div>
    );
};