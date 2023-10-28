import React, { useContext } from "react";
import "./TitleList.css";
import titles from "../../titles.json";
import TitleBlock from "../TitleBlock/TitleBlock";
import SearchContext from "../../Provider/SearchProvider";

function TitleList() {
  const { searchData, setSearchData } = useContext(SearchContext);
  const t = titles;
  const titleBlocks = generateBlocks();

  function generateBlocks() {
    return t.map((title, i) => {
      if (searchData.category !== "" && searchData.category != title.category) {
        return;
      }
      if (
        title.title.toLowerCase().includes(searchData.search) ||
        title.unlock.toLowerCase().includes(searchData.search)
      ) {
        return <TitleBlock key={i} titleData={title} />;
      } else return;
    });
  }

  return <div className="list">{titleBlocks}</div>;
}

export default TitleList;
