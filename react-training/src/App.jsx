import { useState } from "react";

import { fetchWeatherData } from "./utils/fetchWeatherData";
import WeatherData from "./components/WeatherData";

const App = () => {
  const [city, setCity] = useState("New York");
  const [time, setTime] = useState(new Date());

  const weatherData = fetchWeatherData(city);

  return (
    <>
      <h1>Aktualna pogoda w {city}:</h1>
      <WeatherData data={weatherData} />
      <hr />
      <button onClick={() => setCity("London")}>Zmień miasto na Londyn</button>
      <button onClick={() => setCity("Paris")}>Zmień miasto na Paryż</button>
      <button onClick={() => setTime(new Date())}>Aktualizuj czas</button>
      <h3>Aktualizacja czasu: {time.toLocaleTimeString()}</h3>
    </>
  );
};

export default App;
