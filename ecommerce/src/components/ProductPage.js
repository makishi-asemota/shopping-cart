import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImage";

export default function ProductPage() {
  const { productId } = useParams();
  const thisProduct = ProductData.find((prod) => prod.id === productId);
  console.log(thisProduct);

  return (
    <div>
      <p>Hello from product {thisProduct.id}</p>
    </div>
  );
}
