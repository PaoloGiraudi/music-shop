import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { Context } from "../Context";

export default function Header() {
  const { cartItems } = useContext(Context);

  const cartIcon =
    cartItems.length > 0 ? <HiShoppingCart /> : <HiOutlineShoppingCart />;

  return (
    <header className="box-border  flex justify-between ">
      <Link to="/">
        <h1 className="text-4xl font-bold ">Music Shop</h1>
      </Link>
      <Link to="/cart" className="box-border h-24 w-24 text-4xl ">
        {cartIcon}
      </Link>
    </header>
  );
}
