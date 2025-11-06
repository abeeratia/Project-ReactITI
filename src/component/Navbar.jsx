import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-gray-300 px-10 h-[50px] py-1">
      <div className="grid grid-cols-3 gap-2 items-center">
        <div className="logo">
          <h1 className="font-bold text-3xl uppercase">NewHome</h1>
        </div>

        <ul className="flex justify-center">
          {["home", "about", "blog", "contact"].map((item) => (
            <li key={item}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-500 text-white p-4 uppercase"
                    : "p-4 uppercase"
                }
                to={item === "home" ? "/" : `/${item}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex justify-end items-center">
          <div className="relative me-5">
            <Link to="/cart">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                {cart.length || 0}
              </span>
            </Link>
          </div>

          <NavLink to="/regester">
            <button className="bg-amber-500 cursor-pointer text-white p-1 rounded-md uppercase flex justify-center items-center">
              Register <FaUser className="ms-2" />
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className="cursor-pointer bg-amber-500 text-white rounded-md ms-5 p-1 uppercase flex justify-center items-center">
              Login <FaUser className="ms-2" />
            </button>
          </NavLink>

          <FaSearch className="text-xl ms-5" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
