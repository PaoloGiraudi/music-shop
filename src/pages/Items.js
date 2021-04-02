import React, { useContext, useState } from "react";
import Item from "../components/Item";

import { Context } from "../Context";

export default function Items() {
  const { allItems } = useContext(Context);

  const itemElements = allItems.map((item, _id) => (
    <Item key={item.id} item={item} />
  ));

  return <main>{itemElements}</main>;
}
