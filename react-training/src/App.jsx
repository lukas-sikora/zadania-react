import { useState } from "react";

import Timer from "./components/Timer";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <>
      <h1>Zegar</h1>
      <button onClick={toggleTimer}>{isActive ? "Zatrzymaj" : "Wznów"}</button>
      {isActive && <Timer />}
    </>
  );
};
export default App;
