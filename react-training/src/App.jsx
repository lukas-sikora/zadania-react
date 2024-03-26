const App = () => {
  const addName = (e) => {
    e.preventDefault();
    // Dodaj logikę dodawania imienia do listy
  };

  return (
    <div>
      <h1>Lista imion użytkowników</h1>
      <form onSubmit={addName}></form>
      <ul>{/* Wyrenderuj tutaj listę imion */}</ul>
    </div>
  );
};
export default App;
