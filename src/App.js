import React from "react";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="AppName">Weather App build with React</h1>
        <Weather defaultCity="Warsaw" />
        <footer>
          This project was coded by Magda Samuel and is {""}
          <a
            href="https://github.com/MagdaCodes/weather-app-project-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
