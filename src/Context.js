import React, { useState, useEffect } from "react";
// import { MusicBrainzApi } from "musicbrainz-api";
// const mbApi = new MusicBrainzApi();
// const apiUrl = "http://musicbrainz.org/ws/2/artist/?query=daft-punk&fmt=json";

// import { getAlbum } from "music-md";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/christiangroothuis/music-api/master/data/music.albums.json";
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
    setCartItems((prevItems) => prevItems.filter((i) => i._id !== id));
  }

  // async function callSearchFunction(e) {
  //   e.preventDefault();
  //   // setTitle(e.target[0].value);
  //   // setArtist(e.target[1].value);
  //   const res = await fetch(
  //     "https://raw.githubusercontent.com/christiangroothuis/music-api/master/data/music.albums.json"
  //   );
  //   var data = await res.json();
  //   console.log(data);
  // }

  return (
    <Context.Provider
      value={{
        allItems,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
