import ProductDetails from "./components/ProductDetails";

const product1 = {
  name: "Laptop",
  description: "Wysokiej klasy laptop do gier",
  price: "4000 PLN",
  isOnSale: true,
};
const product2 = {
  name: "Słuchawki",
  description: "Bezprzewodowe słuchawki z redukcją szumów",
  price: "600 PLN",
  isOnSale: false,
};
const product3 = {
  name: "Smartfon",
  description: "Nowoczesny smartfon z dużym ekranem",
  price: "2500 PLN",
  isOnSale: true,
};
const product4 = {
  name: "Klawiatura",
  description: "Mechaniczna klawiatura do gier",
  price: "350 PLN",
  isOnSale: false,
};

const App = () => {
  return (
    <>
      <ProductDetails product={product1} />
      <ProductDetails product={product2} />
      <ProductDetails product={product3} />
      <ProductDetails product={product4} />
    </>
  );
};
export default App;
