"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, category, quantity };
    console.log(item);
    alert(`Added ${quantity} ${name} to ${category}`);

    setNewItemCreated(true);

    setName("");
    setQuantity(1);
    setCategory("produce");

    setNewItemCreated(false);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };

    const increment = () => {
      setQuantity(quantity + 1);
      console.log(quantity);
    };
    const decrement = () => {
      setQuantity(quantity - 1);
      console.log(quantity);
    };

    return (
      <main>
        <div className="min-h-screen bg-blue-gra-100 flex items-center justify-center">
          <p className="flex-2 text-xl w-10">{quantity}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="black mb-4">
              <span className="text-gray=800">Item Name</span>
              <input
                type="text"
                placeholder="Enter item name"
                value={name}
                onChange={handleNameChange}
                className="w-28"
              />
            </label>
          </form>

          <select>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="snacks">Snacks</option>
            <option value="beverages">Beverages</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>

          <button
            onClick={decrement}
            className="flex-2 items-center bg-gray-500 hover:bg-blue-700 text-white rounded w-10 h-7"
          >
            -
          </button>

          <button
            onClick={increment}
            className="flex-2 bg-blue-500 items-center hover:bg-blue-700 text-white rounded w-10 h-7"
          >
            +
          </button>

          <button
            type="submit"
            className="flex-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-10 h-7"
          >
            Submit
          </button>
        </div>
      </main>
    );
  };
}
