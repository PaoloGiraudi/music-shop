import React, { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Context } from "../Context";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="flex items-center my-4">
      <IoTrashOutline
        className="mr-4 text-2xl text-red-600 cursor-pointer"
        onClick={() => removeFromCart(item.id)}
      />
      <img className="w-36" src={item.url} alt={item.artist} />
      <div className="ml-4">
        <h3 className="text-xl mb-1">{item.album}</h3>
        <h4 className="text-gray-500">{item.artist}</h4>
      </div>
      <p className="flex-grow text-lg text-right mr-4">$5.99</p>
    </div>
  );
}
