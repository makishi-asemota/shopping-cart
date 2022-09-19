import React from "react";
import { ProductPage } from "./ProductPage";

export default function CartItems({ cart, setCart }) {
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  return (
    <>
      <h1 className="cart-title">Cart</h1>
      {cart.map((product, idx) => (
        <div key={idx} className="cart-item">
          <div className="photo">
            <img
              src={product.src}
              alt="product"
              className="product-image"
            ></img>
          </div>
          <div className="name">{product.name}</div>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
    </>
  );
}
