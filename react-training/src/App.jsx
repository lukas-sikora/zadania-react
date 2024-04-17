import { useState } from "react";

import Posts from "./components/Posts";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <h1>{isLoaded ? "Posty" : "Ladowanie danych"}</h1>
      <Posts onDataLoaded={() => setIsLoaded(true)} />
    </>
  );
};

export default App;
