const Product = ({ product, onToggle }) => {
  console.log("Rendering:", product.name);
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.available ? "Dostępny" : "Niedostępny"}</p>
      <button onClick={() => onToggle(product.id)}>Zmień dostępność</button>
    </div>
  );
};

export default Product;
