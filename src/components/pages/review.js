import React from "react";
import { useState, useEffect } from "react";
import { getAllCategories } from "./api.js";

export function Reviews() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);
  return (
    <div className="App">
      <ul>
        {categories.map((category) => {
          console.log(category);
          return <li>{category.slug}</li>;
        })}
      </ul>
    </div>
  );
}
