import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });

  const [cart, setCart] = useState([]);

  const addToCart = (el) => setCart([...cart, el]);
  console.log(cart);

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
