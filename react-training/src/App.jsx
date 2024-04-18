import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <nav>
        <a>Strona Główna</a>
        <a>Lista Książek</a>
        <a>Kontakt</a>
      </nav>
      <AppRoutes />
    </div>
  );
};

export default App;
