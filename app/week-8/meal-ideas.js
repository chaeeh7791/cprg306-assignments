"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function MealIdeas(ingredient) {
  const [mealIdeas, setMealIdeas] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => setMealIdeas(data));
  }, [ingredient]);

  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold">Meal Ideas</h2>
      <ul>
        {mealIdeas.map((mealIdea, index) => (
          <li key={index}>{mealIdea}</li>
        ))}
      </ul>
    </div>
  );
}
