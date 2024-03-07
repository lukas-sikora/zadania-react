import ReactDOM from 'react-dom/client'

const WeatherWidget = () => {
  return (
    <div>
      <h2>Prognoza pogody</h2>
      <p>
        <strong>Lublin: 25°C,</strong> słonecznie
      </p>
      <p>
        <strong>Warszawa: 20°C,</strong> deszczowo
      </p>
      <p>
        <strong>Poznań: 24°C,</strong> słonecznie
      </p>
      <p>
        <strong>Wrocław: 22°C,</strong> częściowo zachmurzone
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<WeatherWidget />)
