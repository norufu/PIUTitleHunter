import React, { useContext } from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import SearchContext from "../../Provider/SearchProvider";

function CategorySelect() {
  const categories = [
    "Grade",
    "Timesink",
    "Unique",
    "Boss",
    "Run",
    "Gimmick",
    "Twist",
    "Drill",
    "Half",
    "Bracket",
  ];

  const { searchData, setSearchData } = useContext(SearchContext);

  function updateSearch(newValue) {
    setSearchData({ ...searchData, category: newValue });
  }

  const categoryButtons = generateButtons();
  function generateButtons() {
    return categories.map((category) => (
      <CategoryButton
        key={category}
        categoryName={category}
        currentSearch={searchData.category}
        updateSearch={updateSearch}
      />
    ));
  }

  return <div>{categoryButtons}</div>;
}

export default CategorySelect;
