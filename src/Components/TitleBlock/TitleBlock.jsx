import React, { useState } from "react";
import "./TitleBlock.css";

function TitleBlock({ titleData }) {
  const [isUnlocked, setIsUnlocked] = useState(
    localStorage.getItem(titleData.title)
  );
  const blockClasses = localStorage.getItem(titleData.title)
    ? "block unlocked"
    : "block";
  const titleClasses = "tx " + titleData.colour;
  //   const isUnlocked = localStorage.getItem(titleData.title) ? true : false;
  function toggleUnlocked() {
    if (isUnlocked) {
      setIsUnlocked(false);
      localStorage.removeItem(titleData.title);
    } else {
      setIsUnlocked(true);

      localStorage.setItem(titleData.title, true);
    }
  }

  return (
    <div className={blockClasses} onClick={toggleUnlocked}>
      <span className={titleClasses}>{titleData.title} </span>
      <span className="unlock">{titleData.unlock}</span>
    </div>
  );
}

export default TitleBlock;
