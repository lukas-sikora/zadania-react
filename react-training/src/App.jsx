import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Tutaj dodaj walidację */
    alert("Adres e-mail zapisany!");
  };

  return (
    <>
      <h1>Walidator adresu e-mail:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Wpisz adres e-mail..."
          />
        </div>
        <button>Wyślij</button>
      </form>
      <h2>{error}</h2>
    </>
  );
};
export default App;
