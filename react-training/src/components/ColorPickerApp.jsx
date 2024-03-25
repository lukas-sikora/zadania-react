import { useState } from "react";

const ColorPickerApp = () => {
  const [color, setColor] = useState("");

  const [selectedColor, setSelectedColor] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedColor(color);
  };

  return (
    <>
      <h1>Wybierz kolor:</h1>
      {selectedColor && (
        <h2 style={{ backgroundColor: selectedColor }}>
          Wybrano kolor: {selectedColor}
        </h2>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Czerwony
            <input
              type="radio"
              value="czerwony"
              checked={color === "czerwony"}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Zielony
            <input
              type="radio"
              value="zielony"
              checked={color === "zielony"}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Niebieski
            <input
              type="radio"
              value="niebieski"
              checked={color === "niebieski"}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Zapisz wybór</button>
      </form>
    </>
  );
};
export default ColorPickerApp;
