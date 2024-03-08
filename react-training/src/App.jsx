const showCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  alert(`Aktualna godzina to: ${hours}:${minutes}`);
};

const App = () => {
  return <button onClick={showCurrentTime}>Pokaż aktualną godzinę</button>;
};

export default App;
