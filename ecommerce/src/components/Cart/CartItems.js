import React from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

export default function CartItems({ cart, removeFromCart }) {
  function emptyMessage() {
    if (cart.length === 0) {
      return { __html: "Nothing to see here" };
    } else {
      return { __html: "" };
    }
  }

  function getTotal() {
    return cart.reduce((sum, { price }) => sum + price, 0);
  }

  return (
    <>
      <Container>
        <Row>
          <Col
            sm={4}
            lg={4}
            className="d-flex flex-column align-items-center itemTotal"
          >
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">Cart</div>
              <div className="card-body">
                <h5 className="card-title">Total: ${getTotal()}</h5>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={emptyMessage()}
                ></p>
              </div>
            </div>
          </Col>

          <Col sm={8} lg={8} className="cartItems">
            <Stack gap={3}>
              {cart.map((product, idx) => (
                <div key={idx} className="card mb-3 border border-warning">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.src}
                        class="img-fluid rounded-start"
                        alt={product.name}
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-warning">
                          {product.name}
                        </h5>
                        <p className="card-text">{product.description}</p>
                        <Button
                          variant="danger"
                          onClick={() => removeFromCart(product)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
