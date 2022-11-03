import { ProductData } from "./ProductImages";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

export default function Shop() {
  const Products = ProductData.map((product) => {
    return (
      <div key={product.id}>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={product.src} />
          <Card.Body className="cardBody">
            <Card.Title
              style={{ backgroundColor: "whitesmoke", color: "black" }}
            >
              {product.name}
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ backgroundColor: "white" }}
            >
              ${product.price}
            </Card.Subtitle>
            <a href={`/shop/${product.id}`}>
              <Button variant="dark">Details</Button>{" "}
            </a>
          </Card.Body>
          <div className="name"></div>
        </Card>
      </div>
    );
  });

  return <div className="shop-container">{Products}</div>;
}
