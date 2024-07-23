import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Main_data(props) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [localtime, setLocalTime] = useState("");
  const [temperature, setTemp] = useState("");
  const [uv, setUV] = useState("");
  const [windspeed, setWindSpeed] = useState("");
  const [winddir, setWindDir] = useState("");
  const [feelslike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weathercond, setWeatherCond] = useState("");
  const [icon, setIcon] = useState("");
  const [weathercode, setWeatherCode] = useState();

  // const [error, setError] = useState(false);

  //console.log(props.data);
  // const sendError = () => {
  //   props.onFetchError(error);
  //   setError(false);
  // };
  const sendCode = () => {
    props.onFetchCode(weathercode);
  };
  const sendCurr = () => {
    if (city && localtime && temperature && weathercond && country && icon)
      props.onFetchCurr(
        city,
        localtime,
        temperature,
        weathercond,
        country,
        icon
      );
  };

  const sendRealtime = () => {
    if (uv && windspeed && winddir && feelslike && humidity)
      props.onFetchReal(uv, windspeed, winddir, feelslike, humidity);
  };

  useEffect(() => {
    const current = () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: props.data },
        headers: {
          "x-rapidapi-key":
            "5855a33cfamsh4c0ba46a227ead6p104687jsneb419b209fef",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      async function fetch_realtime() {
        try {
          const response = await axios.request(options);
          //Temp
          setCity(response.data.location.name);
          setCountry(response.data.location.country);
          setLocalTime(response.data.location.localtime);
          setTemp(response.data.current.temp_c);
          setWeatherCond(response.data.current.condition.text);
          setIcon(response.data.current.condition.icon);
          setWeatherCode(response.data.current.condition.code);
          //Realtime
          setUV(response.data.current.uv);
          setWindSpeed(response.data.current.wind_kph);
          setWindDir(response.data.current.wind_dir);
          setFeelsLike(response.data.current.feelslike_c);
          setHumidity(response.data.current.humidity);

          //logs
          console.log(response.data.location.name);
          console.log(response.data.location.localtime);
          console.log(response.data.current.temp_c);
          console.log(response.data.current.uv);
          console.log(response.data.current.wind_kph);
          console.log(response.data.current.wind_dir);
          console.log(response.data.current.feelslike_c);
        } catch (error) {
          console.error(error);
          // setError(true);
        }
      }
      fetch_realtime();
    };
    if (props.data) {
      current();
    }
  }, [props.data]);

  if (
    city &&
    localtime &&
    temperature &&
    weathercond &&
    country &&
    icon &&
    uv &&
    windspeed &&
    winddir &&
    feelslike &&
    humidity
  ) {
    sendCurr();
    sendRealtime();
  }
  if (weathercode) {
    sendCode();
  }
  // if (error) {
  //   sendError();
  // }
  return;
}
