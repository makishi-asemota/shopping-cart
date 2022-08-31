import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
