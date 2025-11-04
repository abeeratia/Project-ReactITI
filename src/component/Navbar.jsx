import { FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-300 px-10 h-[50px] ">
      <div className=" grid grid-cols-3 gap-2 items-center ">
        <div className="logo">
          <h1 className="font-bold text-3xl uppercase">NewHome</h1>
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? "bg-amber-500 text-white p-4 uppercase" : "p-4 uppercase"
                }
                to="/"
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? "bg-amber-500 text-white p-4 uppercase" : "p-4 uppercase"
                }
                to="/about"
              >
                About{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? "bg-amber-500 text-white p-4 uppercase" : "p-4 uppercase"
                }
               
                to="/blog"
              >
                blog{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? "bg-amber-500 text-white p-4 uppercase" : "p-4 uppercase"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <button className="uppercase flex justify-center items-center ">
            Login{" "}
            <span className="ps-2">
              <FaUser />
            </span>
          </button>
          <p className="ps-10">
            <FaSearch />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
