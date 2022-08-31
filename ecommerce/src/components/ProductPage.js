import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage(props) {
  const { id } = useParams();
  return <div>Hello from product page {props.id}</div>;
}
