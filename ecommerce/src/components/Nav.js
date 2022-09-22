import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { mdiCart } from "@mdi/js";
import { mdiStore } from "@mdi/js";

export default function Nav({ cart }) {
  return (
    <nav>
      <ul>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li className="nav-link">
            <Icon path={mdiHome} />
            Home
          </li>
        </Link>
        <Link to={"/Shop"} style={{ textDecoration: "none" }}>
          <li className="nav-link">
            <Icon path={mdiStore} />
            Store
          </li>
        </Link>
        <Link to={"/Cart"} style={{ textDecoration: "none" }}>
          <li className="nav-link">
            <Icon path={mdiCart} /> Cart({cart.length})
          </li>
        </Link>
      </ul>
    </nav>
  );
}
