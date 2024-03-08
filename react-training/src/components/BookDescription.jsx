const BookDescription = ({ bookDescription, bookTitle }) => {
  let showDescription = false;

  const toggleDescription = () => {
    showDescription = !showDescription;
  };

  return (
    <>
      <h2>{bookTitle}</h2>
      <button onClick={toggleDescription}>Pokaż opis</button>
      {showDescription && <p>{bookDescription}</p>}
    </>
  );
};

export default BookDescription;
