import { useRef } from "react";

const App = () => {
  const sectionRef = useRef(null);

  const scrollToElement = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="wrapper">
      <button onClick={scrollToElement}>Przewiń do sekcji</button>
      <section ref={sectionRef}>Docelowy element</section>
    </div>
  );
};

export default App;
