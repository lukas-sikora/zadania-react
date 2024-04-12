import { useState } from "react";

const App = () => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Szukaj użytkownika..."
      />
      <ul>
        <li>user</li>
      </ul>
    </div>
  );
};

export default App;
