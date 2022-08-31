import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/Shop"}>
          <li>Shop</li>
        </Link>
        <Link to={"/Cart"}>
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}
