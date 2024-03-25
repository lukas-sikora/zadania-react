import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red"); // Ustawienie domyślnej wartości

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nie jest potrzebne dodatkowe ustawienie stanu, ponieważ `color` już przechowuje wybrany kolor
  };

  return (
    <>
      <h1>Wybierz kolor:</h1>
      <h2 style={{ backgroundColor: color }}>Wybrano kolor: {color}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Czerwony
            <input
              type="radio"
              name="color"
              value="red"
              checked={color === "red"}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Zielony
            <input
              type="radio"
              name="color"
              value="green"
              checked={color === "green"}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Niebieski
            <input
              type="radio"
              name="color"
              value="blue"
              checked={color === "blue"}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Zapisz wybór</button>
      </form>
    </>
  );
};
export default App;
