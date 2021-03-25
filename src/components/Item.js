import React from "react";

export default function Item({ item }) {
  return (
    <div>
      <img src={item.url} alt="" />
    </div>
  );
}
