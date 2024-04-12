import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const exchangeRate = { PLN: 1, EUR: 4.6, USD: 4 };

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("PLN");

  return (
    <CurrencyContext.Provider value={{ currency, exchangeRate, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
