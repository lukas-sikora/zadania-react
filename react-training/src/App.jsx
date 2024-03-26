import { useState } from "react";

import StyledButton from "./components/StyledButton";

const App = () => {
  const [buttonColor, setButtonColor] = useState("");

  return (
    <>
      <select onChange={(e) => setButtonColor(e.target.value)}>
        <option disabled selected value>
          -- wybierz kolor --
        </option>
        <option value="blue">Niebieski</option>
        <option value="red">Czerwony</option>
        <option value="green">Zielony</option>
      </select>
      <StyledButton color={buttonColor}>Zmień mój kolor</StyledButton>
    </>
  );
};

export default App;
