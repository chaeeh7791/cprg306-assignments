"use client";

import { getItems, addItem } from "./_services/shopping-list-service.js";
import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);
    setItems([...items, { ...newItem, id: itemId }]);
  };

  const loadItems = async () => {
    const itemsData = await getItems(user.uid);
    setItems(itemsData);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold m-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
