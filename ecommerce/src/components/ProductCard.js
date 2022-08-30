import React from "react";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div onClick={props.click} className="photo">
        <img src={props.item.src} alt="product" className="product-image"></img>
      </div>
      <div className="name">{props.item.name}</div>
    </div>
  );
};

export default ProductCard;
