const usersData = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Jan" },
  { id: 3, name: "Olga" },
];

const UsersTable = () => {
  return (
    <div>
      <h1>Lista Użytkowników</h1>
      <input type="text" placeholder="Filtruj po imieniu..." />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map(({ id, name }) => (
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
