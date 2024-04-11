import { useState, useEffect } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Ilość kliknięć: ${count}`);
  }, []); // Zmiana tablicy zależności na pustą spowoduje wykonanie funkcji po pierwszym renderowaniu komponentu

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Kliknij mnie</button>
      <p>Liczba kliknięć: {count}</p>
    </div>
  );
};

export default ClickCounter;
