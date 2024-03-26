import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex flex-col items-center pt-10 h-screen">
      <h1 className="text-center text-gray-800 text-4xl">Moja lista zadań</h1>
      <TodoList />
    </div>
  );
};
export default App;
