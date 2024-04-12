import { useState } from "react";

import { Body, Header } from "./componets";
import { LanguageContext, ThemeContext } from "./context";

const App = () => {
  const [language, setLanguage] = useState("PL");
  const [theme, setTheme] = useState("light");

  return (
    <>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="PL">Polski</option>
        <option value="EN">Angielski</option>
      </select>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Jasny</option>
        <option value="dark">Ciemny</option>
      </select>
      <ThemeContext.Provider value={theme}>
        <LanguageContext.Provider value={language}>
          <Header />
          <Body />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
