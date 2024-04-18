import { BrowserRouter, Link } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Strona Główna</Link>
          <Link to="/books">Lista Książek</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
