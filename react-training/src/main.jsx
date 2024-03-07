import ReactDOM from 'react-dom/client'

const CityWeather = (props) => {
  return (
    <p>
      <strong>
        {props.city}: {props.temperature}°C,
      </strong>
      {props.description}
    </p>
  )
}

const WeatherWidget = () => {
  return (
    <div>
      <h2>Prognoza pogody</h2>
      <CityWeather city='Lublin' temperature={25} description='słonecznie' />
      <CityWeather city='Warszawa' temperature={20} description='deszczowo' />
      <CityWeather city='Poznań' temperature={24} description='słonecznie' />
      <CityWeather city='Wrocław' temperature={22} description='zachmurzenie' />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<WeatherWidget />)
