import { ProductData } from "../ProductImages";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Shop() {
  const Products = ProductData;
  return (
    <>
      <div className="text-center pt-3">
        <h2 className="fw-bold text-warning">Webstore</h2>
      </div>
      <br></br>
      <div className="shop-container">
        {Products.map((product) => {
          return (
            <div key={product.id} className="pb-5">
              <Card className="shopCard border border-warning ">
                <Card.Img variant="top" src={product.src} />
                <Card.Body className="cardBody bg-warning">
                  <Card.Title className="bg-warning text-dark fs-6 fw-bold">
                    {product.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-dark bg-warning pt-1 pb-1">
                    ${product.price}
                  </Card.Subtitle>
                  <Link to={`/shop/${product.id}`}>
                    <Button
                      name="details"
                      variant="dark"
                      style={{ width: "100%" }}
                    >
                      Details
                    </Button>{" "}
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
