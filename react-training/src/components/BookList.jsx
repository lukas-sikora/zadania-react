const books = [
  { id: 1, title: "Lśnienie", author: "Stephen King" },
  { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Gra o tron", author: "George R.R. Martin" },
  { id: 4, title: "Wiedźmin", author: "Andrzej Sapkowski" },
  { id: 5, title: "Harry Potter", author: "J.K. Rowling" },
];

const BookList = () => {
  return (
    <>
      <h1>Lista książek z autorami:</h1>
      <section>
        {books.map(({ id, title, author }) => [
          <h4 key={`title-${id}`}>{title}</h4>,
          <h5 key={`author-${id}`}>{author}</h5>,
        ])}
      </section>
    </>
  );
};
export default BookList;
