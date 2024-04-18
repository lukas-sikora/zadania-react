import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <h1>Witaj w naszej restauracji!</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Rezerwacja</Link>
        <Link to="/info">Informacje</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
