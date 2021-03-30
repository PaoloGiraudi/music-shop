import React, { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Context } from "../Context";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <IoTrashOutline onClick={() => removeFromCart(item.id)} />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}
