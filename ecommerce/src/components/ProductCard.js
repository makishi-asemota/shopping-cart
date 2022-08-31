import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div onClick={props.click} className="photo">
        <Link to={`/shop/` + props.id}>
          <img
            src={props.item.src}
            alt="product"
            className="product-image"
          ></img>
        </Link>
      </div>
      <div className="name">{props.item.name}</div>
    </div>
  );
};

export default ProductCard;
