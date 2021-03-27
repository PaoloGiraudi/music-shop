import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

export default function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <main className="cart-page">
      <h3>Check out</h3>
      {cartItemElements}
      <p className="total-cost">Total:</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}
