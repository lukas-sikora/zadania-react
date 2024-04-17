const WeatherData = ({ data }) => {
  console.log("render");

  return (
    <div>
      <p>Dane pogodowe: {data}</p>
    </div>
  );
};

export default WeatherData;
