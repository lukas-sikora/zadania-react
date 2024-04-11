import ClickCounter from "./component/ClickCounter";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Welcome in Couter App</h1>
      <ClickCounter />
    </div>
  );
};

export default App;
