import React, { useState } from "react";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineShoppingCart,
  HiShoppingCart,
} from "react-icons/hi";

export default function Item({ item }) {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && <HiOutlineHeart className="favorite" />;
  const cartIcon = hovered && <HiOutlineShoppingCart className="cart" />;

  return (
    <div
      className="image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img style={{ maxWidth: "100%" }} src={item.url} alt="" />
      {cartIcon}
      {heartIcon}
    </div>
  );
}
