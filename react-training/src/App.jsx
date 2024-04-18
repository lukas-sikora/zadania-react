import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import MenuItemDetail from "./pages/menu/MenuItemDetail";
import Reservation from "./pages/reservation/Reservation";
import RestaurantInfo from "./pages/restaurationInfo/RestaurantInfo";
import Layout from "./components/Layout";
import Summary from "./pages/summary/Summary";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/summary", element: <Summary /> },

        {
          path: "/menu",
          element: <Menu />,
          children: [{ path: ":itemId", element: <MenuItemDetail /> }],
        },
        { path: "/reservation", element: <Reservation /> },
        { path: "/info", element: <RestaurantInfo /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
