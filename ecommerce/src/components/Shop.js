import { ProductData } from "./ProductImages";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const Products = ProductData.map((product) => {
    return (
      <>
        <div key={product.id} className="product-card">
          <div className="photo">
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.src}
                alt="product"
                className="product-image"
              ></img>
            </Link>
          </div>
          <div className="name">{product.name}</div>
        </div>
      </>
    );
  });

  return <div className="shop-container">{Products}</div>;
}
