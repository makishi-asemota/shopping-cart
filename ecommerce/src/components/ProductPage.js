import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";
import CartItems from "./CartItems";

export default function ProductPage({ setCart, cart }) {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (!itemInCart) {
      itemInCart = {
        ...product,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  // console.log(cart);

  return (
    <div>
      <div className="product-container">
        <img
          src={thisProduct.src}
          className="product-image"
          alt={thisProduct.name}
        ></img>
        <p className="product-name">{thisProduct.name}</p>
        <p className="product-description">{thisProduct.description}</p>
      </div>
      <button type="submit" onClick={() => addToCart(thisProduct)}>
        Add to Cart
      </button>
    </div>
  );
}
