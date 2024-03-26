import Course from "./components/Course";
import "./app.css"; // dodany import

const courses = [
  {
    key: "react",
    name: "React",
    description: "Biblioteka do budowania interfejsów użytkownika",
    level: "Początkujący",
  },
  {
    key: "angular",
    name: "Angular",
    description: "Platforma do budowania aplikacji internetowych",
    level: "Zaawansowany",
  },
  {
    key: "vue",
    name: "Vue",
    description: "Progresywny framework do tworzenia interfejsów użytkownika",
    level: "Średniozaawansowany",
  },
];

const App = () => {
  return (
    <>
      <h1 className="title">Lista kursów programowania</h1>
      <ul className="list">
        {courses.map((course) => (
          <li key={course.key}>
            <Course course={course} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
