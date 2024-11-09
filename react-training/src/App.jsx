import ColorfulWrapper from "./components/ColorfulWrapper";
import ToggleContent from "./components/ToggleContent";

const App = () => {
  return (
    <ColorfulWrapper bgColor="black" textColor="white">
      <h1>Interesujące fakty o kosmosie:</h1>
      <ToggleContent label="Pokaż/ukryj treść">
        <p>
          W kosmosie występuje kompletna cisza, ponieważ dźwięk wymaga medium do
          podróżowania, a próżnia kosmiczna tego nie zapewnia.
        </p>
      </ToggleContent>
      <ToggleContent label="Pokaż/ukryj treść">
        <p>
          Gwiazda neutronowa jest tak gęsta, że jedna łyżeczka jej materiału ma
          masę około 6 miliardów ton.
        </p>
      </ToggleContent>
    </ColorfulWrapper>
  );
};

export default App;
