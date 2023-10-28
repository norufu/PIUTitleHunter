"use client";
import React, { useContext, useState } from "react";
import SearchContext from "../../Provider/SearchProvider";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchData, setSearchData } = useContext(SearchContext);

  function updateSearch(newValue) {
    setSearchData({ ...searchData, search: newValue });
    setSearchTerm(newValue);
  }

  return (
    <input
      className="searchBar"
      onChange={(e) => {
        updateSearch(e.target.value);
      }}
      type="text"
      value={searchTerm}
      placeholder="Search titles..."
    ></input>
  );
}

export default SearchBar;
