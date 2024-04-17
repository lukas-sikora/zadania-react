const App = () => {
  const product = { name: "Smartfon XYZ", price: 2999 };

  return (
    <>
      <h1>Szczegóły produktu:</h1>
      <hr />
      <h2>Ilość w koszyku: 2</h2>
      <button
        onClick={() => {
          "zmień stan produktu";
        }}
      >
        Dodaj jeden produkt
      </button>
    </>
  );
};
export default App;
