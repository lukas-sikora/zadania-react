import { useState, useCallback } from "react";

import Posts from "./components/Posts";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleDataLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <h1>{isLoaded ? "Posty" : "Ladowanie danych"}</h1>
      <Posts onDataLoaded={handleDataLoaded} />
    </>
  );
};

export default App;
