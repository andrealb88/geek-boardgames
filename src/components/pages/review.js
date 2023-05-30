// import { useState, useEffect } from "react";
import BoardGameSearch from "./api.js";
import React from "react";

export function Reviews() {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   GetAllCategories().then((categoriesFromServer) => {
  //     setCategories(categoriesFromServer);
  //   });
  // }, []);
  // return (
  //   <div className="App">
  //     <ul>
  //       {categories.map((category) => {
  //         console.log(category);
  //         return <li>{category.template_url}</li>;
  //       })}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <h1>Board Game Search</h1>
      <BoardGameSearch />
    </div>
  );
}
