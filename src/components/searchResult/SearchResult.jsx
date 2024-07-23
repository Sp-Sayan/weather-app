import React, { useEffect, useRef, useState } from "react";

export default function SearchResult(props) {
  const resultRef = useRef(null);
  const [arrayflag, setArrayFlag] = useState(false);

  const handleClick = (e) => {
    props.SearchCompleted(e.target.innerHTML);
  };

  useEffect(() => {
    if (props.data.length !== 0) {
      setArrayFlag(true);
    } else {
      setArrayFlag(false);
    }
  }, [props.data]);

  return (
    <div className="search-result">
      <div
        className={`search-result-content  ${
          props.immediatedata === "" ? "hide" : ""
        }`}
      >
        {arrayflag ? (
          props.data.map((event) => (
            <div
              className="search-result-text"
              ref={resultRef}
              onClick={handleClick}
            >
              {event.name}
              {event.region !== "" ? "," : ""} {event.region}
            </div>
          ))
        ) : (
          <div className="no-result">No Result Found</div>
        )}
      </div>
    </div>
  );
}
