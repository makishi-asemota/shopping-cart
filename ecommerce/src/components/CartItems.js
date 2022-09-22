import React, { useState } from "react";
import { ProductPage } from "./ProductPage";

export default function CartItems({ cart, setCart }) {
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  function emptyMessage() {
    if (cart.length === 0) {
      return { __html: "Nothing to see here" };
    } else {
      return { __html: "" };
    }
  }

  return (
    <>
      <h1 className="cart-title">Cart</h1>
      <p className="cart-message" dangerouslySetInnerHTML={emptyMessage()}></p>
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
