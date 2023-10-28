"use client";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import TitleList from "../TitleList/TitleList";
import SearchContext from "../../Provider/SearchProvider";
import CategorySelect from "../CategorySelect/CategorySelect";

function SearchLayout() {
  const [searchData, setSearchData] = useState({ search: "", category: "" });
  return (
    <div>
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <CategorySelect />
        <SearchBar />
        <TitleList />
      </SearchContext.Provider>
    </div>
  );
}

export default SearchLayout;
