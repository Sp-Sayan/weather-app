import React from "react";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Temp(props) {
  return (
    <div className="main-card-content">
      <div className="main-content-box">
        <div className="place-box">
          {/* <FontAwesomeIcon icon={faLocationDot} /> */}
          <p className="place">
            {props.city}, {props.country}
          </p>
        </div>
        <div className="temp-overall">
          <p className="temp">{props.temperature} &deg; C</p>
          <img
            className="weather-icon"
            src={props.icon}
            alt="current-weather"
          />
        </div>
        <p className="condition">{props.weathercond}</p>
        <span className="date-time">
          <p className="time">{props.localtime}</p>
        </span>
      </div>
    </div>
  );
}
