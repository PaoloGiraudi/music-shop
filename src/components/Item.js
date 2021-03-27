import React, { useContext, useState } from "react";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineShoppingCart,
  HiShoppingCart,
} from "react-icons/hi";

import { Context } from "../Context";

export default function Item({ item }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  function heartIcon() {
    if (item.isFavorite)
      return (
        <HiHeart className="favorite" onClick={() => toggleFavorite(item.id)} />
      );

    if (hovered) {
      return (
        <HiOutlineHeart
          className="favorite"
          onClick={() => toggleFavorite(item.id)}
        />
      );
    }
  }
  const cartIcon = hovered && <HiOutlineShoppingCart className="cart" />;

  return (
    <div
      className="image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img style={{ maxWidth: "100%" }} src={item.url} alt="" />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}
