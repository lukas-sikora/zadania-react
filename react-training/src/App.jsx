import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BooksPage, ContactPage, HomePage, NotFoundPage } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/books", element: <BooksPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
