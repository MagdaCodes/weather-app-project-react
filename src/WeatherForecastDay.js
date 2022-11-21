import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.daily.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.daily.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.daily.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.daily.condition.icon} size={36} />
      <div className="Forecast-temp">
        <span className="Forecast-temp-max"> {maxTemperature()}</span>{" "}
        <span className="Forecast-temp-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
