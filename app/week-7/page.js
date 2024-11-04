"use client";

import ItemList from "./item-list.js";
import itemsData from "./items.json";
import Item from "./item.js";
import NewItem from "./new-item.js";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold m-4"> Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <ul>
        {items.map((id) => (
          <li key={id.name}></li>
        ))}
      </ul>
      <Item />
    </main>
  );
}
