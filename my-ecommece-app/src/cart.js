import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>🛍️ Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} - 💲{item.price}
          </p>
        ))
      )}
    </div>
  );
};

export default Cart;
