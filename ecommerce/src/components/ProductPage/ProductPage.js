import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../ProductImages";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

export default function ProductPage({ cart, addToCart }) {
  const { id } = useParams();
  const thisProduct = ProductData.find((prod) => {
    return prod.id == id;
  });

  const [message, setMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const addMessage = (product) => {
    let itemInCart = cart.find((item) => product.name === item.name);
    if (itemInCart) {
      setShowModal(true);
    } else {
      setMessage(true);
      setTimeout(function () {
        setMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="productCardContainer">
      <div className="card mb-3 border border-warning productCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={thisProduct.src}
              class="img-fluid rounded-start"
              alt={thisProduct.name}
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body productCardBody">
              <div className="productPrice">
                <h5 className="card-title text-warning">{thisProduct.name}</h5>
                <h5 className="card-title ">${thisProduct.price}</h5>
              </div>
              <p className="card-text">{thisProduct.description}</p>
              <Button
                variant="primary"
                onClick={() => {
                  addToCart(thisProduct);
                  addMessage(thisProduct);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This item is already in cart, only one of each item is available.
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-center"
          style={{ backgroundColor: "black" }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
