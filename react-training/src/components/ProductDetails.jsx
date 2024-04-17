import { memo } from "react";

const ProductDetails = ({ product, children }) => {
  console.log("renderowanie product details");

  return (
    <>
      <h2>
        {product.name}, cena: {product.price} PLN
      </h2>
      {children}
    </>
  );
};

export const ProductDetailsMemo = memo(ProductDetails);
