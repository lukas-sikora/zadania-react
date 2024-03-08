import { FavoriteBooks } from "./components/FavoriteBooks";

const user1 = {
  name: "Jan Kowalski",
  favoriteBook: "Wiedźmin",
  pagesRead: 500,
};
const user2 = {
  name: "Anna Nowak",
  favoriteBook: "Harry Potter",
  pagesRead: 0,
};
const user3 = {
  name: "Piotr Zalewski",
  favoriteBook: "Pan Tadeusz",
  pagesRead: 0,
};

const App = () => {
  return (
    <>
      <h1>Ulubione książki użytkowników:</h1>
      <FavoriteBooks user={user1} />
      <FavoriteBooks user={user2} />
      <FavoriteBooks user={user3} />
    </>
  );
};
export default App;
