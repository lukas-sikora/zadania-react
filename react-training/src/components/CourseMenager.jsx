const CourseManager = () => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.target.reset();
        }}
      >
        <input name="name" type="text" placeholder="Nazwa kursu" required />
        <input
          name="hours"
          type="number"
          placeholder="Liczba godzin"
          required
        />
        <input name="price" type="number" placeholder="Cena" required />
        <button type="submit">Dodaj kurs</button>
      </form>
      <ul>
        <li>nazwa - 20 godzin, Cena: 300 zł</li>
      </ul>
      <h2>Łączny koszt kursów: 300 zł</h2>
    </>
  );
};

export default CourseManager;
