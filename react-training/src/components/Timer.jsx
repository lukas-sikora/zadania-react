import { useEffect, useState } from "react";

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
const Timer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    console.log("Zegar uruchomiony");
    const interval = setInterval(() => {
      const currentTime = getCurrentTime();
      console.log(currentTime);
      setTime(currentTime);
    }, 1000);

    return () => {
      console.log("Zegar zatrzymany");
      clearInterval(interval);
    };
  }, []);

  return <h2>{time}</h2>;
};

export default Timer;
