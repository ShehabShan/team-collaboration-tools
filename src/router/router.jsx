import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
