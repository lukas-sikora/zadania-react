import "./Course.css"; // dodany import

const Course = ({ course }) => {
  return (
    <>
      <h2 className="course-title">{course.name}</h2>
      <p>{course.description}</p>
      <span className="course-level">{course.level}</span>
    </>
  );
};
export default Course;
