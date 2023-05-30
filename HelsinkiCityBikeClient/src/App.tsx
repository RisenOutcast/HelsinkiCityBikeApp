import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ENDPOINTS, API_URL } from "./api";

interface weatherData {
  id: number;
  date: string;
  summary: string;
  temperatureC: number;
  temperatureF: number;
}

function App() {
  const [weather, setWeather]:Array<any> = useState([]);

  const fetchData = async () => {
    const response = await fetch(API_URL + ENDPOINTS.weather);
    const data = await response.json();

    const fetchedData = []

    for (const key in data) {
      fetchedData.push({
        id: key,
        date: data[key].date,
        summary: data[key].summary,
        temperatureC: data[key].temperatureC,
        temperatureF: data[key].temperatureF,
      });
    }

    setWeather(fetchedData);
    console.log(fetchedData)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {weather.map((wData:weatherData) => (
          <p>{wData.date}</p>
        ))}
    </div>
  );
}

export default App;
