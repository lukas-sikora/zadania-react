import { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const tasksLeft = tasks.filter((task) => !task.completed).length;
    console.log(
      `Aktualnie masz ${tasksLeft} z ${tasks.length} zadań do wykonania`
    );
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newEntry = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newEntry]);
      setNewTask("");
    }
  };

  const handleToggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(({ id }) => id !== taskId));
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={handleAddTask}>Dodaj Zadanie</button>
      <ul>
        {tasks.map(({ completed, text, id }) => (
          <li key={id}>
            <span
              style={{
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {text}
            </span>
            <button onClick={() => handleToggleCompleted(id)}>
              {completed
                ? "Oznacz jako niezakończone"
                : "Oznacz jako zakończone"}
            </button>
            <button onClick={() => handleDeleteTask(id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
