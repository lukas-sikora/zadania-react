const FavoriteBooks = ({ user }) => {
  return (
    <>
      <h2>
        {user.name} - {user.favoriteBook}
      </h2>
      {user.pagesRead > 0 && <span>Przeczytane strony: {user.pagesRead}</span>}
      <hr />
    </>
  );
};
export default FavoriteBooks;
