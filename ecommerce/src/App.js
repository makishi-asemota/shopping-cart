import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import Home from "./components/Home";
import MenuBar from "./components/MenuBar";
import CartItems from "./components/CartItems";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

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

  return (
    <div>
      <BrowserRouter>
        <MenuBar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/:id"
            element={
              <ProductPage
                cart={cart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartItems cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
