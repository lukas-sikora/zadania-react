import { Content, Header } from "./components/index";

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <footer style={{ padding: "10px", fontSize: "14px" }}>
        Czy podoba Ci się nasza aplikacja? Napisz do nas!
      </footer>
    </>
  );
};

export default App;
