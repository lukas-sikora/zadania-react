import { useContext } from "react";

import { Header, Content } from "./components";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.green }}>
      <Header />
      <Content />
      <footer style={{ padding: "10px", fontSize: "14px" }}>
        Czy podoba Ci się nasza aplikacja? Napisz do nas!
      </footer>
    </div>
  );
};

export default App;
