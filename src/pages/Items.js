import React, { useContext } from "react";
import Item from "../components/Item";

import { Context } from "../Context";

export default function Items() {
  const { allItems } = useContext(Context);

  const itemElements = allItems.map((item, _id) => (
    <Item key={item.id} item={item} />
  ));

  return (
    <main className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {itemElements}
    </main>
  );
}
