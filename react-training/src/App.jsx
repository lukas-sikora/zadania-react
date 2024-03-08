import UserProfile from "./components/UserProfile";

const user1 = {
  name: "Marta",
  age: 29,
  occupation: "Inżynier oprogramowania",
};
const user2 = { name: "Tomasz", age: 34 };
const user3 = { name: "Ewa", age: 27, occupation: "Projektant UX" };
const user4 = { name: "Piotr", age: 31, occupation: "Tester oprogramowania" };

const App = () => {
  return (
    <>
      <UserProfile user={user1} />
      <UserProfile user={user2} />
      <UserProfile user={user3} />
      <UserProfile user={user4} />
    </>
  );
};
export default App;
