import { Content, Header } from "./components";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <Content />
      <footer style={{ padding: "10px", fontSize: "14px" }}>
        Czy podoba Ci się nasza aplikacja? Napisz do nas!
      </footer>
    </div>
  );
};

export default App;
