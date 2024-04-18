import { Link, Outlet } from "react-router-dom";

import { MENU_ITEMS } from "../../mocks/menuItems";

const Menu = () => {
  return (
    <ul>
      {MENU_ITEMS.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/menu/${id}`}>{name}</Link>
        </li>
      ))}
      <Outlet />
    </ul>
  );
};

export default Menu;
