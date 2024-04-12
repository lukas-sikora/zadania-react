import { useContext } from "react";

import { Header, Content } from "./components";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const backgroundColor = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px", backgroundColor }}>
      <Header />
      <Content />
      <footer style={{ padding: "10px", fontSize: "14px" }}>
        Czy podoba Ci się nasza aplikacja? Napisz do nas!
      </footer>
    </div>
  );
};

export default App;
