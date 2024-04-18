const App = () => {
  const handleStart = () => {};
  const handleStop = () => {};

  return (
    <>
      <h1>Wylosowana liczba: 20</h1>
      <button onClick={handleStart}>Rozpocznij losowanie</button>
      <button onClick={handleStop}>Zatrzymaj i pokaż wynik</button>
    </>
  );
};

export default App;
