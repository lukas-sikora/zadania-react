const posts = [
  {
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
  },
  {
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    id: 2,
  },
];

const App = () => {
  return (
    <div>
      <h1>Lista postów</h1>
      <button>Odśwież</button>
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
