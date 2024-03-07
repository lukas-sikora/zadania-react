import ReactDOM from 'react-dom/client'

const UserList = () => {
  ;<div>
    <h2>Lista naszych użytkowników</h2>
    <ul>
      <li>Anna</li>
      <li>Bartek</li>
      <li>Cecylia</li>
    </ul>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<UserList />)
