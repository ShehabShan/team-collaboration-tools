import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const hanldeLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const links = (
    <div className="text-white">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">All Scholership</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
    </div>
  );

  const dropDown = (
    <div className="text-white">
      <li>
        <NavLink to="/">My Profile</NavLink>
      </li>
      <li>
        <button
          onClick={hanldeLogout}
          className=" bg-blue-500 text-white py-1 flex justify-center "
        >
          Sing Out
        </button>
      </li>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full py-3 z-50 bg-white ">
      <div className="w-[100%]  lg:max-w-[1440px] lg:mx-auto text-black flex justify-between items-center ">
        <div className="flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-[#7d7d7d] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl lg:hidden">
            <h3 className="text-3xl">Team Bridge</h3>
          </Link>
          <div className="lg:flex hidden items-center lg:gap-16 ">
            <Link to="/" className="btn btn-ghost text-xl hidden lg:flex">
              <h3 className="text-3xl ">School Hive</h3>
            </Link>
            <div className=" hidden lg:flex">
              <ul className=" flex gap-4 text-[#000000] font-semibold ">
                {links}
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          {!user ? (
            <div className="space-x-4">
              <Link to="/login" className="btn bg-blue-500 text-white ">
                Login
              </Link>
            </div>
          ) : (
            <>
              <div id="profilePic" className="dropdown dropdown-end  ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
                gap-1"
                >
                  {dropDown}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
