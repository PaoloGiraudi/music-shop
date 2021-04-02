import React, { useContext, useState } from "react";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlinePlusCircle,
  HiShoppingCart,
} from "react-icons/hi";

import { Context } from "../Context";

export default function Item({ item }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  function heartIcon() {
    if (item.isFavorite)
      return (
        <HiHeart
          className="favorite"
          onClick={() => toggleFavorite(item._id)}
        />
      );

    if (hovered) {
      return (
        <HiOutlineHeart
          className="favorite"
          onClick={() => toggleFavorite(item._id)}
        />
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((i) => i._id === item._id);
    if (alreadyInCart)
      return (
        <HiShoppingCart
          className="cart"
          onClick={() => removeFromCart(item._id)}
        />
      );

    if (hovered) {
      return (
        <HiOutlinePlusCircle className="cart" onClick={() => addToCart(item)} />
      );
    }
  }

  return (
    <div
      className="image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img style={{ maxWidth: "100%" }} src={item.img} alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}
