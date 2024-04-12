import { CurrencySelector, Product } from "./components";
import CurrencyProvider from "./context/CurrencyContext";

const App = () => {
  return (
    <CurrencyProvider>
      <CurrencySelector />
      <Product price={10} />
    </CurrencyProvider>
  );
};

export default App;
