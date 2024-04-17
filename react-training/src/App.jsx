const App = () => {
  const product = { name: "Smartfon XYZ", price: 2999 };

  // element children
  //   <h3>
  //   Dostępność: <span>W magazynie</span>
  //  </h3>

  return (
    <>
      <h1>Szczegóły produktu:</h1>
      {/* W tym miejscu powinien znaleć się komponent ProductDetails*/}
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
