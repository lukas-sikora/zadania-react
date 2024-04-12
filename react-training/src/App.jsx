import { useState } from "react";

import EventTracker from "./componens/EventTracker";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isVisible ? "Ukryj licznik" : "Pokaż licznik"}
      </button>
      {isVisible && <EventTracker />}
    </>
  );
};
export default App;
