import { useState, useRef } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 100) + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <h1>Wylosowana liczba: {currentNumber}</h1>
      <button onClick={handleStart}>Rozpocznij losowanie</button>
      <button onClick={handleStop}>Zatrzymaj i pokaż wynik</button>
    </>
  );
};

export default App;
