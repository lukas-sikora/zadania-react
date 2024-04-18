const ToDoList = () => {
  return (
    <>
      <input type="text" placeholder="Dodaj zadanie" />
      <button>Dodaj</button>
      <ul>
        <li>
          Zrobić zakupy
          <button>Usuń</button>
        </li>
      </ul>
    </>
  );
};

export default ToDoList;
