import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "shower-rain-day": "SLEET",
    "shower-rain-night": "SLEET",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": " WIND",
    "mist-night": " WIND",
    "scattered-clouds-day": "FOG",
    "scattered-clouds-night": "FOG",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#234685"
      size={props.size}
      animate={true}
    />
  );
}
