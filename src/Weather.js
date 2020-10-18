import React from "react";

export default function Weather(props) {
    return <div className="weather">
        <h1>Погода</h1>
        <div className="weather__content">
            <div>
                <p>Город: {props.weather.city} </p>
                <p>{props.weather.temp}°C, {props.weather.stat}</p>
                <p>Скорость ветра: {props.weather.speed} м/с</p>
            </div>
            <div>
                <img alt='weather icon'
                     src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
                />
            </div>
        </div>
    </div>;
}