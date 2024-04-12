import { useContext } from "react";

import { CurrencyContext } from "../context/CurrencyContext";

const Product = ({ price }) => {
  const { currency, exchangeRate } = useContext(CurrencyContext);

  const finalPrice = price / exchangeRate[currency];

  return (
    <p>
      Cena: {finalPrice.toFixed(2)} {currency}
    </p>
  );
};

export default Product;
