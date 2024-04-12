import { useContext } from "react";

import { CurrencyContext } from "../context/CurrencyContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <option value="PLN">PLN</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
    </select>
  );
};

export default CurrencySelector;
