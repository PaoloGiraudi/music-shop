import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Music Shop</h1>
      </Link>
      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </header>
  );
}
