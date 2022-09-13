import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";

export default function ProductPage() {
  const { id } = useParams();
  const eachProduct = Object.keys(ProductData).map((key) => );
  const thisProduct = eachProduct.find((prod) => prod.id === id);
  console.log(thisProduct);
  console.log(typeof ProductData);

  return (
    <div>
      <p>Hello from product {id} </p>
      <p></p>
    </div>
  );
}
