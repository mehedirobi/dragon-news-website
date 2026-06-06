import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout> ,
    children: [
      
      { path: "category/:id", element: <CategoryNews></CategoryNews>,
        
        loader:  () => fetch('/news.json').then(res => res.json())
       },
       {
        path: "about", element: <About></About>
       },
       {
        path: "contact", element: <Contact></Contact>
       }, 
       {
        path: "login", element: <Login></Login>
       }, 
       {
        path: "register", element: <Register></Register>
       }
    ],
  },
]);

export default router;