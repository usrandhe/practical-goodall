import React, { useEffect, useState } from "react";
export default function Test({ searchResult }) {
  const [search, setSearch] = useState("");
  const [filterResult, setfilteredData] = useState([]);
  let filteredData = [];
  const TextHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchClick = () => {
    filteredData = searchResult?.filter((value) => {
      return value.text.toLowerCase().includes(search);
    });

    setfilteredData(filteredData);
    console.log(filterResult);
  };
  return (
    <>
      <input type="text" value={search} onChange={TextHandler} />
      <input type="button" value="search" onClick={searchClick} />
      {filterResult &&
        filterResult.map((item, index) => {
          return <h4 key={index}>{item.text}</h4>;
        })}
    </>
  );
}
