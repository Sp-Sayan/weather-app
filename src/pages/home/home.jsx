import React from "react";
import Temp from "../../components/main_temp/temp";
import RealTime from "../../components/realtime_card/realtime";
import Astro from "../../components/astronomy/astro";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import Main_data from "../../data/main_data";
import Astro_data from "../../data/astro_data";
// import Swal from "sweetalert2";
import SearchResult from "../../components/searchResult/SearchResult";
import SearchComp from "../../data/SearchComp";
import { motion } from "framer-motion";

export default function Home(props) {
  const [previewflag, setPreviewFlag] = useState(true);

  const [searchparam, setSearchParam] = useState("");
  const [city, setCity] = useState("Kolkata");
  const [country, setCountry] = useState(" India");
  const [localtime, setLocalTime] = useState("Search to continue");
  const [temperature, setTemp] = useState("27.2");
  const [weathercond, setWeatherCond] = useState("This is a demo data");
  const [icon, setIcon] = useState(
    "//cdn.weatherapi.com/weather/64x64/day/116.png"
  );

  const [uv, setUV] = useState("1");
  const [windspeed, setWindSpeed] = useState("9");
  const [winddir, setWindDir] = useState("SSW");
  const [feelslike, setFeelsLike] = useState("29.2");
  const [humidity, setHumidity] = useState("94");

  const [sunrise, setSunRise] = useState("4:00PM");
  const [sunset, setSunSet] = useState("4:00PM");
  const [moonrise, setMoonRise] = useState("4:00PM");
  const [moonset, setMoonSet] = useState("4:00PM");

  const [searchfill, setSearchFill] = useState("");
  const [searchresult, setSearchResult] = useState([]);
  const [searchcompleted, setSearchCompleted] = useState("");

  // const [error, setError] = useState(false);

  const handleError = (e) => {
    setError(e);
  };

  //for search suggestions
  const handleSearchFill = (e) => {
    setSearchFill(e);
  };
  const handleSearchResult = (e) => {
    setSearchResult(e);
  };
  const handleSearchCompleted = (e) => {
    setSearchCompleted(e);
  };

  //for climate code
  const handleCode = (e) => {
    //console.log(e);
    props.onFetch(e);
  };

  //for final search data
  const handleData = (e1) => {
    setSearchParam(e1);
    setPreviewFlag(false);
    //console.log(searchparam);
  };

  //for current(temp) data
  const handleCurrent = (e1, e2, e3, e4, e5, e6) => {
    setCity(e1);
    setLocalTime(e2);
    setTemp(e3);
    setWeatherCond(e4);
    setCountry(e5);
    setIcon(e6);
    //console.log(city);
  };

  //for realtime data
  const handleReal = (e1, e2, e3, e4, e5) => {
    setUV(e1);
    setWindSpeed(e2);
    setWindDir(e3);
    setFeelsLike(e4);
    setHumidity(e5);
    //console.log(uv);
  };

  //for astronomy data
  const handleAstro = (e1, e2, e3, e4) => {
    setSunRise(e1);
    setSunSet(e2);
    setMoonRise(e3);
    setMoonSet(e4);
  };

  return (
    <>
      <Navbar
        onSearch={handleData}
        onSearchFill={handleSearchFill}
        data={searchcompleted}
      />
      {previewflag ? (
        <>
          {/* <SearchResult
            data={searchresult}
            immediatedata={searchfill}
            SearchCompleted={handleSearchCompleted}
          /> */}
          <div className="preview-content">
            <p>Search for Desired location to get started</p>
            <p className="warning">
              Note: No money so data can be inaccurate due to the free api :)
            </p>
          </div>
        </>
      ) : (
        <div>
          {/* <SearchResult
            data={searchresult}
            immediatedata={searchfill}
            SearchCompleted={handleSearchCompleted}
          /> */}
          <div className="home-content">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 700 }}
              className="main-temp-card"
            >
              <Temp
                city={city}
                localtime={localtime}
                temperature={temperature}
                weathercond={weathercond}
                country={country}
                icon={icon}
              />
            </motion.div>
            <div className="side-report-card">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 700,
                }}
                className="realtime-card"
              >
                <RealTime
                  uv={uv}
                  windspeed={windspeed}
                  winddir={winddir}
                  feelslike={feelslike}
                  humidity={humidity}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 700,
                }}
                className="astro-card"
              >
                <Astro
                  sunrise={sunrise}
                  sunset={sunset}
                  moonrise={moonrise}
                  moonset={moonset}
                />
              </motion.div>
              <p>
                Made with <span>❤</span> by Sayan
              </p>
            </div>
            <Main_data
              data={searchparam}
              onFetchCode={handleCode}
              onFetchCurr={handleCurrent} // Callback function called from main_data to send data
              onFetchReal={handleReal} // Callback function called from main_data to send data
              onFetchError={handleError}
            />
            <Astro_data data={searchparam} onFetchAstro={handleAstro} />
            {/* <SearchComp
              data={searchfill}
              onFetchSearchResult={handleSearchResult}
            /> */}
          </div>
        </div>
      )}
    </>
  );
}
