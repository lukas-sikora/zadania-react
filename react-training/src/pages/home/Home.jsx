import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>Witaj w naszej restauracji!</h1>
      <nav>
        <Link to="/about">O nas</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Rezerwacja</Link>
        <Link to="/info">Informacje</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
