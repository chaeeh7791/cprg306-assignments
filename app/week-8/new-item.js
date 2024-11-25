"use client";

import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { id: uuidv4(), name, category, quantity };
    console.log(item);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
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
              onChange={(e) => setName(e.target.value)}
              className="mt-1 mb-3 p-3 block w-full h-10 border border-black rounded-md text-black bg-gray-100 focus:bg-white"
            />
          </label>

          <div className="flex justify-between items-center mb-4">
            <label className="flex-1 flex flex-row rounded-lg bg-gray-100 gap-2 p-3 m-3 justify-center">
              <span className="text-black mr-6">{quantity}</span>
              <button
                type="button"
                onClick={decrement}
                className="bg-gray-500 hover:bg-blue-700 text-white rounded-lg w-8"
              >
                -
              </button>

              <button
                type="button"
                onClick={increment}
                className="bg-blue-700 hover:bg-gray-700 text-white rounded-lg w-8"
              >
                +
              </button>
            </label>

            <label htmlFor="category" className="flex-1">
              <span className="text-gray-800"></span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-gray-300 p-3 rounded-lg text-black bg-gray-100 focus:bg-white w-full"
              >
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
          </div>

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
