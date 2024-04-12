import { Button } from "./Button";

const App = () => {
  const defaultButtonConfig = {
    label: "Kliknij mnie",
    onClick: () => alert("Kliknięto przycisk"),
    type: "button",
  };

  return (
    <>
      <p>Prosty komponent z przyciskiem.</p>
      <Button {...defaultButtonConfig} />
    </>
  );
};

export default App;
