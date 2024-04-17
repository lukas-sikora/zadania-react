import { memo } from "react";

const areEqual = (prevProps, nextProps) =>
  prevProps.product.available === nextProps.product.available;

const Product = memo(({ product, onToggle }) => {
  console.log("Rendering:", product.name);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.available ? "Dostępny" : "Niedostępny"}</p>
      <button onClick={() => onToggle(product.id)}>Zmień dostępność</button>
    </div>
  );
}, areEqual);

export default Product;
