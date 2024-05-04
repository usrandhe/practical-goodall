import React, { useEffect, useState } from "react";
import "./task.css";
export default function Test({ searchResult }) {
  const [search, setSearch] = useState("");
  const [filterResult, setfilteredData] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(false);

  const handleTextChange = (e) => {
    setSearch(e.target.value);
    setIsHideSuggs(false);
  };

  useEffect(()=>{
    setfilteredData(searchResult)
    setIsHideSuggs(true);
  },[searchResult])

  const handleSearchClick = (e) => {
    setfilteredData(
      searchResult?.filter((value) =>
        value.text.toLowerCase().includes(e.target.value)
      )
    );
  };

  const selectHandleClick = (selectedValue) => {
    setSearch(selectedValue);
    setIsHideSuggs(true);
  };

  return (
    <>
      {" "}<div className="container">
      <div className="sugesstion-auto">
        <div className="form-control-auto">
          <label htmlFor="tag-input">Todo</label>
          <input
            type="text"
            value={search}
            onChange={handleTextChange}
            onKeyUp={handleSearchClick}
          />
        </div>
        {/* <input type="button" value="search" onClick={handleSearchClick} /> */}
        <div
          className="suggestions"
          style={{ display: isHideSuggs ? "none" : "block" }}
        >
          {filterResult &&
            filterResult.map((item, index) => (
              <div key={index} onClick={() => selectHandleClick(item["text"])}>
                {item["text"]}
              </div>
            ))}{" "}
        </div>
      </div></div>
    </>
  );
}
