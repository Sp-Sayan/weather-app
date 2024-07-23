import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Astro_data(props) {
  const [sunrise, setSunRise] = useState("");
  const [sunset, setSunSet] = useState("");
  const [moonrise, setMoonRise] = useState("");
  const [moonset, setMoonSet] = useState("");

  const sendAstro = () => {
    props.onFetchAstro(sunrise, sunset, moonrise, moonset);
  };

  useEffect(() => {
    const astro = () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
        params: { q: props.data },
        headers: {
          "x-rapidapi-key":
            "5855a33cfamsh4c0ba46a227ead6p104687jsneb419b209fef",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };
      async function fetch_astro() {
        try {
          const response = await axios.request(options);
          setSunRise(response.data.astronomy.astro.sunrise);
          setSunSet(response.data.astronomy.astro.sunset);
          setMoonRise(response.data.astronomy.astro.moonrise);
          setMoonSet(response.data.astronomy.astro.moonset);
        } catch (error) {
          console.error(error);
        }
      }
      fetch_astro();
    };

    if (props.data) {
      astro();
    }
  }, [props.data]);

  if (sunrise && sunset && moonrise && moonset) {
    sendAstro();
  }
  return;
}
