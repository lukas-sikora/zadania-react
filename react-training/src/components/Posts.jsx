import { useState, useEffect } from "react";

const Posts = ({ onDataLoaded }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Ładowanie postów...");

    (async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await data.json();
      setPosts(response);
      onDataLoaded(response);
    })();
  }, [onDataLoaded]);

  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
export default Posts;
