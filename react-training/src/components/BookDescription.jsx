export default function BookDescription({ bookDescription, bookTitle }) {
  let showDescription = false

  function toggleDescription() {
    showDescription = !showDescription
  }

  return (
    <>
      <h2>{bookTitle}</h2>
      <button onClick={toggleDescription}>Pokaż opis</button>
      {showDescription && <p>{bookDescription}</p>}
    </>
  )
}
