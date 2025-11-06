import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increment,
  removeCart,
} from "../redux/cartSlice";

function Cart() {
  const cartItem = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log("cartItem", cartItem);

  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl text-emerald-700 font-bold text-center mx-auto">
          {" "}
          Cart
        </h2>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Clear All
        </button>
      </div>

      {cartItem.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">Your cart is empty</p>
      ) : (
        <ul className="text-center grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cartItem.map((item) => (
            <div
              key={item._id}
              className="space-y-4 shadow-lg p-6 rounded-2xl border"
            >
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto w-50 h-48 object-cover rounded-md"
              />
              <div className="flex justify-between items-center w-75 mx-auto">
                <p
                  onClick={() => dispatch(increment(item._id))}
                  className="cursor-pointer text-4xl text-amber-600 bg-gray-300 px-6 py-2 rounded-md"
                >
                  +
                </p>
                <h3 className="text-xl text-red-600 font-bold">
                  Quantity: {item.quantity}
                </h3>
                <p
                  onClick={() => dispatch(decrement(item._id))}
                  className="cursor-pointer text-4xl text-amber-600 bg-gray-300 px-6 py-2 rounded-md"
                >
                  -
                </p>
              </div>
              <button
                onClick={() => dispatch(removeCart(item._id))}
                className="cursor-pointer w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
