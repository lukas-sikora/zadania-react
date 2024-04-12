import { useEffect, useState } from "react";

const EventTracker = () => {
  const [clicksCount, setClicksCount] = useState(0);

  useEffect(() => {
    console.log("Dodanie nasłuchiwacza zdarzeń");
    const handleClick = () => {
      setClicksCount((prevCount) => prevCount + 1);
    };

    window.addEventListener("click", handleClick);
    return () => {
      console.log("Usunięcie nasłuchiwacza zdarzeń");
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <div>Liczba kliknięć: {clicksCount}</div>;
};
export default EventTracker;
