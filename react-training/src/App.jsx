const currentDate = new Date()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()

const App = () => (
  <h1>
    {hours}:{minutes}
  </h1>
)

export default App
