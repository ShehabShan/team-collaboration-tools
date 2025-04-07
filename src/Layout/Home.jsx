import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Nabvar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
