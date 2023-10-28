import React from "react";
import "./CategoryButton.css";
function CategoryButton({ categoryName, currentSearch, updateSearch }) {
  const classes =
    categoryName === currentSearch ? "categoryButton active" : "categoryButton";

  return (
    <button
      className={classes}
      onClick={() => {
        updateSearch(categoryName === currentSearch ? "" : categoryName);
      }}
    >
      {categoryName}
    </button>
  );
}

export default CategoryButton;
