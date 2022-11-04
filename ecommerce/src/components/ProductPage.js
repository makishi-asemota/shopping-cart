import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductImages";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

export default function ProductPage({ addToCart, removeFromCart }) {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });

  const [message, setMessage] = useState(false);

  const [button, setButton] = useState(false);

  // const addMessage = (product) => {
  //   setButton(true);
  //   removeFromCart(product);
  //   console.log(cart);
  //   // let itemInCart = cart.find((item) => product.name === item.name);
  //   // if (itemInCart && button === true) {
  //   // } else {
  //   //   setMessage(true);
  //   //   setTimeout(function () {
  //   //     setMessage(false);
  //   //   }, 3000);
  //   // }
  // };

  return (
    <>
      <div className="productCard">
        <Card style={{ width: "35%" }}>
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
                variant={button ? "danger" : "primary"}
                type="submit"
                onClick={() => {
                  addToCart(thisProduct);
                  // button ? setButton(false) : setButton(true);
                  // if (button === true) {
                  //   addToCart(thisProduct);
                  // } else {
                  //   removeFromCart(thisProduct);
                  // }
                }}
              >
                {button ? "Remove" : "Add to Cart"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
