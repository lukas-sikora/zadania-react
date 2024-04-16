import { useState, useMemo } from "react";

const CourseManager = () => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  const totalCost = useMemo(
    () => courses.reduce((sum, course) => sum + course.price, 0),
    [courses]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, hours, price } = event.target.elements;

    addCourse({
      name: name.value,
      hours: parseInt(hours.value, 10),
      price: parseFloat(price.value),
    });
    event.target.reset();
  };

  return (
    <>
      <h1>Zarządzanie kursami</h1>
      <form onSubmit={handleSubmit}>
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
        {courses.map(({ name, hours, price }, index) => (
          <li key={index}>
            {name} - {hours} godzin, Cena: {price} zł
          </li>
        ))}
      </ul>
      <h2>Łączny koszt kursów: {totalCost} zł</h2>
    </>
  );
};

export default CourseManager;
