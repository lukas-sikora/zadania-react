import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Content = () => {
  const backgroundColor = useContext(ThemeContext);

  return (
    <main style={{ padding: "15px", backgroundColor }}>
      Tutaj znajdziesz interesujące artykuły na różne tematy.
    </main>
  );
};

export default Content;
