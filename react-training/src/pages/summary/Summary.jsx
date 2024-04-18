import { useLocation } from "react-router-dom";

import { MENU_ITEMS } from "../../mocks/menuItems";

const Summary = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const item = MENU_ITEMS.find((item) => item.id === Number(id));

  return (
    <div>
      {!item ? (
        <h2>Złoż najpierw zamówienie</h2>
      ) : (
        <>
          <h2>Podsumowanie zamówienia</h2>
          <p>Zamówiono pizze: {item.name}</p>
        </>
      )}
    </div>
  );
};

export default Summary;
