import { useState } from "react";

const BookDescription = ({ bookDescription, bookTitle }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <>
      <h2>{bookTitle}</h2>
      <button onClick={toggleDescription}>
        {showDescription ? "Ukryj opis" : "Pokaż opis"}
      </button>
      {showDescription && <p>{bookDescription}</p>}
    </>
  );
};

export default BookDescription;
