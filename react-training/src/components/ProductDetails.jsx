import { memo } from "react";

const ProductDetails = memo(({ product, children }) => {
  console.log("renderowanie product details");

  return (
    <>
      <h2>
        {product.name}, cena: {product.price} PLN
      </h2>
      {children}
    </>
  );
});

export default ProductDetails;
