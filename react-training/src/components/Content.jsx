import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Content = () => {
  const theme = useContext(ThemeContext);

  return (
    <main style={{ padding: "15px", backgroundColor: theme.lightblue }}>
      Tutaj znajdziesz interesujące artykuły na różne tematy.
    </main>
  );
};

export default Content;
