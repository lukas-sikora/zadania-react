import { Link, Outlet } from "react-router-dom";

import { MENU_ITEMS } from "../../mocks/menuItems";

const Menu = () => {
  return (
    <ul>
      {MENU_ITEMS.map(({ id, name }) => (
        <li key={id}>
          <h3>
            <Link to={`/menu/${id}`}>{name}</Link>
          </h3>
        </li>
      ))}
      <Outlet />
    </ul>
  );
};

export default Menu;
