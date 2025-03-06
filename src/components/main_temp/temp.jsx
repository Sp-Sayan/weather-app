import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Temp() {
  const main = useSelector((state) => state.mainTemp);

  return (
    <div className="main-card-content">
      <div className="main-content-box">
        <div className="place-box">
          {/* <FontAwesomeIcon icon={faLocationDot} /> */}
          <p className="place">
            {main.city}, {main.country}
          </p>
        </div>
        <div className="temp-overall">
          <p className="temp">{main.temperature} &deg; C</p>
          <img className="weather-icon" src={main.icon} alt="current-weather" />
        </div>
        <p className="condition">{main.weathercond}</p>
        <span className="date-time">
          <p className="time">{main.localtime}</p>
        </span>
      </div>
    </div>
  );
}
