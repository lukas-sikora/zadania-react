import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /.+@.+/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert("Adres e-mail zapisany!");
      setEmail("");
      setError("");
    } else {
      setError(
        "Niepoprawny adres e-mail. Upewnij się, że zawiera '@' oraz znaki przed i po nim."
      );
    }
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
