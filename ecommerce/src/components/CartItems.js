import React, { useState } from "react";
import { ProductPage } from "./ProductPage";

export default function CartItems({ cart, setCart }) {
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const [message, setMessage] = useState(false);

  if (cart.length === 0) {
    setMessage(true);
  } else {
    setMessage(false);
  }

  return (
    <>
      <h1 className="cart-title">Cart</h1>
      <h3 style={{ display: message ? "block" : "none" }}>
        Nothing to see here
      </h3>
      <div className="cart-container">
        {cart.map((product, idx) => (
          <div key={idx} className="cart-item">
            <div className="photo">
              <img
                src={product.src}
                alt="product"
                className="product-image"
              ></img>
            </div>
            <div className="cart-item-name">{product.name}</div>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}
