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
  };

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
      <div className="min-h-screen flex items-center justify-center bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="black mb-4">
            <span className="text-gray=800"></span>
            <input
              type="text"
              placeholder="Enter item name"
              value={name}
              onChange={handleNameChange}
              className="mt-1 mb-3 p-3 block w-full h-10 border-collapse rounded-md text-black bg-gray-100 focus:bg-white"
            />
          </label>

          <label htmlFor="category" className="ml-10 mt-10">
            <span className="text-gray=800"></span>
            <input onChange={handleCategoryChange} />

            <select className="border-gray-300 p-3 rounded-lg text-black bg-gray-100 focus:bg-white">
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
          </label>

          <label className="flex flex-row rounded-lg bg-gray-100 gap-2 p-3 m-3 w-28 justify-center">
            <span className="text-black mr-6">1</span>
            <button
              onClick={decrement}
              className=" bg-gray-500 hover:bg-blue-700 text-white rounded-lg w-8"
            >
              -
            </button>

            <button
              onClick={increment}
              className="bg-blue-700 hover:bg-gray-700 text-white rounded-lg w-8"
            >
              +
            </button>
          </label>

          <button
            type="submit"
            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
