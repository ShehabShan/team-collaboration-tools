import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import NotFound from "../Component/ErrorPage/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
