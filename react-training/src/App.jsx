const currentDate = new Date()

const App = () => {
  const hours = String(currentDate.getHours()).padStart(2, '0')
  const minutes = String(currentDate.getMinutes()).padStart(2, '0')
  const seconds = String(currentDate.getSeconds()).padStart(2, '0')

  return (
    <h1>
      {hours}:{minutes}:{seconds}
    </h1>
  )
}

export default App
