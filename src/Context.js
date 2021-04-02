import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Fetching JSON database of albums

  const url =
    "https://raw.githubusercontent.com/PaoloGiraudi/music-db-JSON/main/music.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArray = allItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isFavorite: !item.isFavorite,
        };
      }
      return item;
    });
    setAllItems(updatedArray);
  }

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allItems,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
