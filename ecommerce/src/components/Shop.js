import Products from "./Products.json";
import ProductCard from "./ProductCard";
import React, { useState, useEffect } from "react";

export default function Shop() {
  const [items, setItems] = useState(Products);

  const shop = items.map((item) => {
    return <ProductCard item={item} key={item.id} />;
  });

  return <div>{shop}</div>;
}
