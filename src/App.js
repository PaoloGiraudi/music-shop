import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Items from "./pages/Items";
import Cart from "./pages/Cart";

import "./Style.css";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Items />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
