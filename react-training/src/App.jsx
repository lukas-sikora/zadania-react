const posts = [
  { title: "React Hooks", category: "React" },
  { title: "Wprowadzenie do Reduxa", category: "Redux" },
  { title: "Zaawansowane typy w TypeScript", category: "TypeScript" },
  { title: "Testowanie komponentów React", category: "React" },
  { title: "Async actions w Redux", category: "Redux" },
];

const App = () => {
  return (
    <>
      <h1>Lista postów:</h1>
      <select>
        <option>Kategoria</option>
      </select>
      <ul>
        {posts.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
      <h2>Licznik odświeżeń: 0</h2>
      <button>+</button>
    </>
  );
};

export default App;
