import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <>
      <h1>Lista zadań:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <form onSubmit={handleAddTask}>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Dodaj nowe zadanie"
        />
        <button type="button">Dodaj</button>
      </form>
    </>
  );
};
export default App;
