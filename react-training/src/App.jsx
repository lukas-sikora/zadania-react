import { useState, useMemo } from "react";

import { ProductDetailsMemo } from "./components/ProductDetails";

const App = () => {
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => ({ name: "Smartfon XYZ", price: 2999 }), []);

  const children = useMemo(
    () => (
      <h3>
        Dostępność: <span>W magazynie</span>
      </h3>
    ),
    []
  );

  return (
    <>
      <h1>Szczegóły produktu:</h1>
      <ProductDetailsMemo product={product}>{children}</ProductDetailsMemo>
      <hr />
      <h2>Ilość w koszyku: {quantity}</h2>
      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Dodaj jeden produkt
      </button>
    </>
  );
};

export default App;
