import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const backgroundColor = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "10px",
        fontSize: "24px",
        backgroundColor,
      }}
    >
      Witaj na naszej stronie!
    </header>
  );
};

export default Header;
