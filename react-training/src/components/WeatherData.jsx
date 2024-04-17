import { memo } from "react";

const WeatherData = memo(({ data }) => {
  console.log("render");

  return (
    <div>
      <p>Dane pogodowe: {data}</p>
    </div>
  );
});

export default WeatherData;
