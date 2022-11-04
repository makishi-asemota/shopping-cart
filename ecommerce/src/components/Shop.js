import { ProductData } from "./ProductImages";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Shop() {
  const Products = ProductData.map((product) => {
    return (
      <div key={product.id}>
        <Card className="shopCard">
          <Card.Img variant="top" src={product.src} />
          <Card.Body className="cardBody bg-warning">
            <Card.Title style={{ color: "black" }} className="bg-warning">
              {product.name}
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted bg-warning"
              style={{ backgroundColor: "white" }}
            >
              ${product.price}
            </Card.Subtitle>
            <Link to={`/shop/${product.id}`}>
              <Button variant="dark">Details</Button>{" "}
            </Link>
          </Card.Body>
          <div className="name"></div>
        </Card>
      </div>
    );
  });

  return <div className="shop-container">{Products}</div>;
}
