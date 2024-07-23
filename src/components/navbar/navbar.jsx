import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (props.data !== "No Result Found") {
      setInputValue(props.data);
    }
  }, [props.data]);

  //to get final data
  const searchData = () => {
    if (searchRef.current.value) {
      props.onSearch(searchRef.current.value);
      props.onSearchFill("");
    }
  };

  //to get immediate data
  const searchFill = (e) => {
    setInputValue(e.target.value);
    props.onSearchFill(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); //prevent new line creation after Enter is pressed
      searchData();
    }
  };

  return (
    <>
      <div className="navbar">
        <p className="site-name">Weather App</p>
        <div className="search-bar">
          <textarea
            className="search"
            ref={searchRef}
            value={inputValue}
            onChange={searchFill}
            onKeyDown={handleKeyDown}
            placeholder="Enter city name"
          />
          <div className="search-icon-container">
            <FontAwesomeIcon
              className="search-icon"
              icon={faMagnifyingGlass}
              onClick={searchData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
