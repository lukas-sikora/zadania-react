import { useState } from "react";

const App = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();
    if (newName.trim() !== "") {
      setNames([...names, newName.trim()]);
      setNewName("");
    }
  };

  return (
    <div>
      <h1>Lista imion użytkowników</h1>
      <form onSubmit={addName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Dodaj nowe imię"
        />
        <button type="submit">Dodaj</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
