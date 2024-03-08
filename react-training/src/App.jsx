import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#FFF",
        color: isDarkMode ? "#FFF" : "#000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>{isDarkMode ? "Tryb ciemny" : "Tryb jasny"}</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Wyłącz tryb ciemny" : "Włącz tryb ciemny"}
      </button>
    </div>
  );
};
export default App;
