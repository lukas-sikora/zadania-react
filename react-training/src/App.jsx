import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("Mars");

  return (
    <>
      <h1>Wspaniałe fakty o planetach</h1>
      <button onClick={() => setActiveSection("Mars")}>Mars</button>
      <button onClick={() => setActiveSection("Jowisz")}>Jowisz</button>
      <button onClick={() => setActiveSection("Saturn")}>Saturn</button>

      {activeSection === "Mars" && (
        <section>
          <h2>Mars</h2>
          <p>Mars jest znaną jako Czerwona Planeta.</p>
        </section>
      )}
      {activeSection === "Jowisz" && (
        <section>
          <h2>Jowisz</h2>
          <p>Jowisz jest największą planetą w naszym układzie słonecznym.</p>
        </section>
      )}
      {activeSection === "Saturn" && (
        <section>
          <h2>Saturn</h2>
          <p>Saturn słynie z pięknych pierścieni.</p>
        </section>
      )}
    </>
  );
};

export default App;
