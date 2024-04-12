import DecoratedInput from "./components/DecoratedInput";

const defaultInputConfig = {
  placeholder: "Wpisz swoje imię",
  borderStyle: "dashed",
  borderColor: "blue",
};

const App = () => {
  return (
    <>
      <p>Stylizowane pole tekstowe używające DecoratedInput.</p>
      <DecoratedInput {...defaultInputConfig} />
    </>
  );
};

export default App;
