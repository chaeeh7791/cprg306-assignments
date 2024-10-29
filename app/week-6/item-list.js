"use client";

import Item from "./item.js";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedBy = [...items];
  if (sortBy === "name") {
    sortedBy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedBy.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleClick = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <div className="m-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleClick("name")}
      >
        Sort by Name
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={() => handleClick("category")}
      >
        Sort by Category
      </button>

      <ul className="m-4">
        {sortedBy.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
