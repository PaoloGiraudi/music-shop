import React, { useContext } from "react";
import { IoTerminalOutline } from "react-icons/io5";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

export default function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item._id} item={item} />
  ));

  const cartTotal = cartItems.length * 5.99;
  const cartTotalDisplay = cartTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className="cart-page">
      <h3>Check out</h3>
      {cartItemElements}
      <p className="total-cost">Total: {cartTotalDisplay}</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}
