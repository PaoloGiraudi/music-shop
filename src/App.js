import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Items from "./pages/Items";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className='container mx-auto p-12'>
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
