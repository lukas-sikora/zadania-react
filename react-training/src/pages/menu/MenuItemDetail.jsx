import { useParams, useNavigate } from "react-router-dom";

import { MENU_ITEMS } from "../../mocks/menuItems";

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const item = MENU_ITEMS.find(({ id }) => id === parseInt(itemId));

  const goToSummary = () => {
    navigate("/summary", { state: { id: itemId } });
  };

  return item ? (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button onClick={goToSummary}>Przejdź do podsumowania</button>
    </div>
  ) : (
    <p>Danie nie zostało znalezione.</p>
  );
};

export default MenuItemDetail;
