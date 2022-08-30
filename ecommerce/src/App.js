import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
