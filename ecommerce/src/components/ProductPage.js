import React, { useState, useEffect } from "react";
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

  const [message, setMessage] = useState(false);

  const addMessage = (product) => {
    let itemInCart = cart.find((item) => product.name === item.name);
    if (itemInCart) {
      alert("Item already in cart. Only one of each item available.");
    } else {
      setMessage(true);
      setTimeout(function () {
        setMessage(false);
      }, 3000);
    }
  };

  return (
    <div>
      <div className="product-container">
        <img
          src={thisProduct.src}
          className="product-page-image"
          alt={thisProduct.name}
        ></img>
        <p className="product-name">{thisProduct.name}</p>
        <p className="product-description">{thisProduct.description}</p>
        <button
          type="submit"
          onClick={() => {
            addToCart(thisProduct);
            addMessage(thisProduct);
          }}
        >
          Add to Cart
        </button>
        <p
          className="add-message"
          style={{ display: message ? "block" : "none" }}
        >
          Added to Cart!
        </p>
      </div>
    </div>
  );
}
