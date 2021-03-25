import React, { useContext } from "react";
import Item from "../components/Item";
import { Context } from "../Context";

export default function Items() {
  const { allItems } = useContext(Context);

  const itemElements = allItems.map((item) => (
    <Item key={item.id} item={item} />
  ));

  return <main>{itemElements}</main>;
}
