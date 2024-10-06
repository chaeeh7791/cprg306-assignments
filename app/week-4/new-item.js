"use client";

import { useState } from "react";

export default function NewItem() {
  {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
      setQuantity(quantity + 1);
      console.log(quantity);
    };
    const decrement = () => {
      setQuantity(quantity - 1);
      console.log(quantity);
    };

    return (
      <div className="flex-1 flex flex-row bg-purple-300 gap-2 m-3 p-2 w-28 justify-center">
        <p className="flex-2 text-xl w-10">{quantity}</p>
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
      </div>
    );
  }
}
