const CityWeather = ({ city, temperature, description }) => {
  return (
    <p>
      <strong>
        {city}: {temperature}°C,
      </strong>
      {description}
    </p>
  )
}

export default CityWeather
