const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Stoper</h1>
      <p>Pozostało sekund: 10</p>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Czas w sekundach" />
        <button type="submit">Start</button>
      </form>
    </>
  );
};

export default App;
