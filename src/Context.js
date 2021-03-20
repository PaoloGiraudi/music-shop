import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  return <Context.Provider value={{ allItems }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
