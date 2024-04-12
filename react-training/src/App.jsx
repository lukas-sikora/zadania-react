import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)));
  }, [refresh]);

  const refreshPosts = () => {
    setRefresh((prev) => !prev);
    console.log("Odświeżono listę postów");
  };

  return (
    <div>
      <h1>Lista postów</h1>
      <button onClick={refreshPosts}>Odśwież</button>
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
