import { useState, useMemo } from "react";

const posts = [
  { title: "React Hooks", category: "React" },
  { title: "Wprowadzenie do Reduxa", category: "Redux" },
  { title: "Zaawansowane typy w TypeScript", category: "TypeScript" },
  { title: "Testowanie komponentów React", category: "React" },
  { title: "Async actions w Redux", category: "Redux" },
];

const App = () => {
  const [filter, setFilter] = useState("Wszystkie");
  const [count, setCount] = useState(0);

  const filteredPosts = useMemo(() => {
    return filter === "Wszystkie"
      ? posts
      : posts.filter(({ category }) => category === filter);
  }, [filter]);

  const categories = useMemo(
    () => ["Wszystkie", ...new Set(posts.map(({ category }) => category))],
    []
  );

  return (
    <>
      <h1>Lista postów:</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredPosts.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
      <h2>Licznik odświeżeń: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

export default App;
