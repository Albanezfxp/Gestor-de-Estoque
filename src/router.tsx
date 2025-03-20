import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import LayoutItem from "./components/LayoutItem";
import NewItem from "./pages/NewItem/NewItem";
import ItemDetails from "./pages/ItemDetails/ItemDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/items",
      element: <LayoutItem />,
      children: [
        { index: true, element: <Items /> },
        { path: "newItem", element: <NewItem /> },
        { path: "ItemDetails/:itemDetailsId", element: <ItemDetails /> },
      ],
    },
  ],
  {
    basename: "/Gestor-de-Estoque",
  }
);

export default router;
