import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "10px",
        fontSize: "24px",
        backgroundColor: theme.lightblue,
      }}
    >
      Witaj na naszej stronie!
    </header>
  );
};

export default Header;
