import { FaSearch, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart.value);
  return (
    <nav className="bg-gray-300 px-10 h-[50px]  py-1">
      <div className=" grid grid-cols-3 gap-2 items-center ">
        <div className="logo">
          <h1 className="font-bold text-3xl uppercase">NewHome</h1>
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-500 text-white p-4 uppercase"
                    : "p-4 uppercase"
                }
                to="/"
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-500 text-white p-4 uppercase"
                    : "p-4 uppercase"
                }
                to="/about"
              >
                About{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-500 text-white p-4 uppercase"
                    : "p-4 uppercase"
                }
                to="/blog"
              >
                blog{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-500 text-white p-4 uppercase"
                    : "p-4 uppercase"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <div className="relative">
            <Link to="/cart">
              <h3 className="text-3xl px-4 flex">
                <IoIosNotifications />
              </h3>
            </Link>
            <span className="absolute top-0 left-0 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full">
              {cart}
            </span>
          </div>
          <NavLink to="/regester">
            <button className="bg-amber-500 cursor-pointer text-white p-1 rounded-md uppercase flex justify-center items-center ">
              Regester{" "}
              <span className="ps-2">
                <FaUser />
              </span>
            </button>
          </NavLink>
          <NavLink to="/login">
            <button className=" cursor-pointer bg-amber-500 text-white rounded-md   ms-5 p-1 uppercase flex justify-center items-center ">
              Login{" "}
              <span className="ps-2">
                <FaUser />
              </span>
            </button>
          </NavLink>
          <p className="ps-10">
            <FaSearch />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
