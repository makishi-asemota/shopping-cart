import React from "react";
import { ProductPage } from "./ProductPage";

export default function Cart() {
  const cartItems = cart.map((el) => {
    return (
      <div key={el.id}>
        <img src={el.src} alt="product" className="product-image"></img>
      </div>
    );
  });
}
