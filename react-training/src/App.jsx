import { useState, useRef } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const timerIdRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const duration = parseInt(inputRef.current.value);
    inputRef.current.value = "";

    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }

    if (isNaN(duration) || duration <= 0) {
      setMessage("Podaj prawidłową liczbę sekund większą od zera.");
      return;
    }

    setMessage("Odliczanie...");
    startTimer(duration);
  };

  const startTimer = (duration) => {
    let time = duration;
    timerIdRef.current = setInterval(() => {
      time -= 1;
      setMessage(`Pozostało sekund: ${time}`);
      if (time === 0) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
        setMessage("Czas minął!");
      }
    }, 1000);
  };

  return (
    <>
      <h1>Stoper</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="number" placeholder="Czas w sekundach" />
        <button type="submit">Start</button>
      </form>
    </>
  );
};
export default App;
