import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "a5f3ead5eo0c344a0d7t4ba1b099b8ed";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Monday</div>
          <WeatherIcon code="snow-day" size={36} />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19</span>{" "}
            <span className="Forecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
