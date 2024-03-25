import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <>
      <h1>Lista zadań:</h1>
      <form onSubmit={handleAddTask}>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Dodaj nowe zadanie"
        />
        <button type="submit">Dodaj</button> {/* Zmieniamy typ na "submit" */}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </form>
    </>
  );
};
export default App;
