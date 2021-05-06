import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

export default function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const cartTotal = cartItems.length * 5.99;
  const cartTotalDisplay = cartTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Simulated order process
  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      alert("Order Placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="flex flex-col">
      <h3 className="text-2xl underline mb-4">Check out</h3>
      {cartItemElements}
      <p className="text-xl text-right my-4 mr-4">Total: {cartTotalDisplay}</p>

      {/* If the cart is empty, no button will be shown */}
      {cartItems.length > 0 ? (
        <div className="flex justify-end">
          <button
            className="text-xl py-4 px-2 bg-green-200 border-4 border-green-400 hover:opacity-70"
            onClick={placeOrder}
          >
            {buttonText}
          </button>
        </div>
      ) : (
        <p>You have no items in the cart.</p>
      )}
    </main>
  );
}
