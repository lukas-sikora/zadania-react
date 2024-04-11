import { useState, useEffect } from "react";

const users = [
  { id: 1, name: "Anna", age: 28 },
  { id: 2, name: "Tomasz", age: 34 },
  { id: 3, name: "Ewa", age: 23 },
];

const App = () => {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    const sorted = [...users].sort((a, b) =>
      sortOrder === "ascending" ? a.age - b.age : b.age - a.age
    );
    setSortedUsers(sorted);
  }, [sortOrder]);

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="ascending">Wiek rosnąco</option>
        <option value="descending">Wiek malejąco</option>
      </select>
      <ul>
        {sortedUsers.map(({ id, name, age }) => (
          <li key={id}>
            {name} - {age}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
