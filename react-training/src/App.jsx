import StyledButton from "./components/StyledButton";

const App = () => {
  return (
    <>
      <select>
        <option value="blue">Niebieski</option>
        <option value="red">Czerwony</option>
        <option value="green">Zielony</option>
      </select>
      <StyledButton>Zmień mój kolor</StyledButton>
    </>
  );
};

export default App;
