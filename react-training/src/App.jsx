import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Menu from "./pages/menu/Menu";
import MenuItemDetail from "./pages/menu/MenuItemDetail";
import Reservation from "./pages/reservation/Reservation";
import RestaurantInfo from "./pages/restaurationInfo/RestaurantInfo";
import Summary from "./pages/summary/Summary";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/about", element: <About /> },
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
