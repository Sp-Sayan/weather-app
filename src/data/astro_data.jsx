import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../redux/hooks";
import { setAstroData } from "../redux/slices/astronomy";

export default function Astro_data(props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetch_astro() {
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
      try {
        const response = await axios.request(options);

        dispatch(
          setAstroData({
            sunrise: response.data.astronomy.astro.sunrise,
            sunset: response.data.astronomy.astro.sunset,
            moonrise: response.data.astronomy.astro.moonrise,
            moonset: response.data.astronomy.astro.moonset,
          })
        );
      } catch (error) {
        console.error(error);
      }
    }

    if (props.data) {
      fetch_astro();
    }
  }, [props.data]);

  return;
}
