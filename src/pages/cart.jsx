import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItem = useSelector((state) => state.cart.items);
  console.log("cartItem", cartItem);
  
  return (
    <div className="container ">
      <h2 className="text-3xl text-center h-screen">Cart</h2>
      <ul>
        {cartItem.map((item) => (
          <div className="flex gap-10 justify-center items-center">
            <h3 className="text-2xl" key={item.id}>
              {item.name}
            </h3>
            <img className="w-50 h-50" src={item.image} alt={item.name} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
