import { useState } from "react";

import Product from "./components/Product";

const productsList = [
  { id: 1, name: "Mleko", available: true },
  { id: 2, name: "Chleb", available: false },
];

const App = () => {
  const [products, setProducts] = useState(productsList);

  const toggleAvailability = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, available: !product.available }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Lista produktów:</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onToggle={toggleAvailability}
        />
      ))}
    </div>
  );
};

export default App;
