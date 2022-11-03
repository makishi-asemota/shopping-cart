import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

export default function ProductPage({ setCart, cart }) {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (!itemInCart) {
      itemInCart = {
        ...product,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const [message, setMessage] = useState(false);

  const [button, setButton] = useState(false);

  const addMessage = (product) => {
    setButton(true);
    let itemInCart = cart.find((item) => product.name === item.name);
    if (itemInCart && button === true) {
      removeFromCart(product);
    } else {
      setMessage(true);
      setTimeout(function () {
        setMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="productCard">
      <Card style={{ width: "35%" }}>
        <Card.Img variant="top" src={thisProduct.src}></Card.Img>
        <Card.Body>
          <div className="cardTitle">
            <Card.Title style={{ color: "lightblue" }}>
              {thisProduct.name}
            </Card.Title>
            <Card.Subtitle className="mb-2">${thisProduct.price}</Card.Subtitle>
          </div>
          <Card.Text>{thisProduct.description}</Card.Text>
          <div className="addToCart">
            <Button
              variant={button ? "danger" : "primary"}
              onClick={() => {
                button ? setButton(false) : addMessage(thisProduct);
                addToCart(thisProduct);
              }}
            >
              {button ? "Remove" : "Add to Cart"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
