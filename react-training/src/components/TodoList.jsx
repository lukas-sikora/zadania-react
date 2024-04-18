import { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: state.length, name: action.name }];
    case "remove":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const ToDoList = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName === "") return;

    dispatch({ type: "add", name: taskName });
    setTaskName("");
  };

  return (
    <>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Dodaj zadanie"
      />
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map(({ id, name }) => (
          <li key={id}>
            {name}
            <button onClick={() => dispatch({ type: "remove", id })}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
