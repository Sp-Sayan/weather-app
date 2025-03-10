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
  const [windspeed, setWindSpeed] = useState("");
  const [winddir, setWindDir] = useState("");
  const [feelslike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");

  // const [sunrise, setSunRise] = useState("");
  // const [sunset, setSunSet] = useState("");
  // const [moonrise, setMoonRise] = useState("");
  // const [moonset, setMoonSet] = useState("");

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
  // const handleCode = (e) => {
  //   //console.log(e);
  //   props.onFetch(e);
  // };

  //for final search data
  const handleData = (e1) => {
    setSearchParam(e1);
    setPreviewFlag(false);
    //console.log(searchparam);
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
          {/*<SearchResult
            data={searchresult}
            immediatedata={searchfill}
            SearchCompleted={handleSearchCompleted}
          />*/}
          <div className="home-content">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 700 }}
              className="main-temp-card"
            >
              <Temp />
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
                <Astro />
              </motion.div>
              <p>
                Made with <span>❤</span> by Sayan
              </p>
            </div>
            <Main_data data={searchparam} />
            <Astro_data data={searchparam} />
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
