import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });
  console.log(thisProduct);

  function handleClick() {}

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
      <button>Add to Cart</button>
    </div>
  );
}
