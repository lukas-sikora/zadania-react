import { useContext } from "react";

import { LanguageContext, ThemeContext } from "../context";

const Body = () => {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  const text =
    language === "PL"
      ? "Tutaj możesz zmieniać ustawienia swojego profilu."
      : "Here you can change your profile settings.";
  const style = { color: theme === "light" ? "black" : "lightgray" };

  return (
    <div style={style}>
      <p>{text}</p>
    </div>
  );
};

export default Body;
