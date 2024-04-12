import { useContext } from "react";

import { LanguageContext, ThemeContext } from "../context";

const Header = () => {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  const greeting =
    language === "PL" ? "Witaj w aplikacji" : "Welcome to the app";
  const style = { color: theme === "light" ? "black" : "lightgray" };

  return (
    <header style={style}>
      <h1>{greeting}</h1>
    </header>
  );
};

export default Header;
