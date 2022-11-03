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
  return (
    <div>
      <BrowserRouter>
        <MenuBar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/:id"
            element={<ProductPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<CartItems cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
