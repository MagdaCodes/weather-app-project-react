import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row">
        <div className="col-5">
          <h1> {props.data.city}</h1>

          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>{" "}
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={105} />
        </div>
        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
