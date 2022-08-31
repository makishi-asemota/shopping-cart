import { ProductData } from "./ProductImage";
import ProductCard from "./ProductCard";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [items, setItems] = useState(ProductData);

  const shop = items.map((item) => {
    return <ProductCard item={item} key={item.id} />;
  });

  return <div className="shop-container">{shop}</div>;
}
