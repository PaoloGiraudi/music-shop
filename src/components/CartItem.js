import React from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <IoTrashOutline />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}
