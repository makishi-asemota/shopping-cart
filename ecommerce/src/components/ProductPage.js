import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

export default function ProductPage({ cart, addToCart, removeFromCart }) {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });

  const [message, setMessage] = useState(false);

  const addMessage = (product) => {
    let itemInCart = cart.find((item) => product.name === item.name);
    if (itemInCart) {
      alert("This item is already in cart, only one of each item is available");
    } else {
      setMessage(true);
      setTimeout(function () {
        setMessage(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="productCard">
        <Card style={{ width: "50%" }}>
          <Card.Img variant="top" src={thisProduct.src}></Card.Img>
          <Card.Body>
            <div className="cardTitle">
              <Card.Title style={{ color: "lightblue" }}>
                {thisProduct.name}
              </Card.Title>
              <Card.Subtitle className="mb-2">
                ${thisProduct.price}
              </Card.Subtitle>
            </div>
            <Card.Text>{thisProduct.description}</Card.Text>
            <div className="addToCart">
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  addToCart(thisProduct);
                  addMessage(thisProduct);
                }}
              >
                Add to Cart
              </Button>
              <p>{message ? "Added to Cart!" : ""}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
