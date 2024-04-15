import { useState } from "react";

import useFilterUsers from "./hooks/useFilterUsers";

const App = () => {
  const [filter, setFilter] = useState("");
  const { users, isLoading, isError } = useFilterUsers(filter);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Szukaj użytkownika..."
      />
      {isError && <h1>Błąd ładowania danych</h1>}
      {isLoading ? (
        <h2>Ładowanie...</h2>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => <li key={user.id}>{user.username}</li>)
          ) : (
            <li>Brak wyników</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;
