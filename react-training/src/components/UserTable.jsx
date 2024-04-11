import { useState, useEffect } from "react";

const usersData = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Jan" },
  { id: 3, name: "Olga" },
];

const UsersTable = () => {
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  useEffect(() => {
    const result = usersData.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(result);
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtruj po imieniu..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ name, id }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersTable;
