import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { Context } from "../Context";

export default function Header() {
  const { cartItems } = useContext(Context);

  const cartIcon =
    cartItems.length > 0 ? <HiShoppingCart /> : <HiOutlineShoppingCart />;

  return (
    <header>
      <Link to="/">
        <h1>Music Shop</h1>
      </Link>
      <Link to="/cart">{cartIcon}</Link>
    </header>
  );
}
