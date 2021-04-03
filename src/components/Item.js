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
      return <HiHeart onClick={() => toggleFavorite(item.id)} />;

    if (hovered) {
      return <HiOutlineHeart onClick={() => toggleFavorite(item.id)} />;
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((i) => i.id === item.id);
    if (alreadyInCart)
      return <HiShoppingCart onClick={() => removeFromCart(item.id)} />;

    if (hovered) {
      return <HiOutlinePlusCircle onClick={() => addToCart(item)} />;
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="" src={item.url} alt={item.artist} />
      <div className="text-2xl text-red-600 h-8 w-8 p-1  bg-white absolute left-0 top-0">
        {heartIcon()}
      </div>
      <div className="text-2xl text-green-600 h-8 w-8 p-1 bg-white absolute right-0 top-0">
        {cartIcon()}
      </div>
    </div>
  );
}
