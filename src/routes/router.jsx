import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout> ,
    children: [
      { path: "", element: <Home></Home> },
      { path: "category/:id", element: <CategoryNews></CategoryNews> },
    ],
  },
]);

export default router;