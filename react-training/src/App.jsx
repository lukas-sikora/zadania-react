const callAlert = (text) => {
  alert(text);
};

const App = () => {
  return (
    <button onClick={callAlert("Uwaga, mam ważny komunikat!")}>
      Kliknij mnie!
    </button>
  );
};

export default App;
