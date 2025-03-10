import { useEffect } from "react";
import axios from "axios";

import { setMainTempData } from "../redux/slices/mainTemp/index";
import { useAppDispatch } from "../redux/hooks";
import { setRealTimeData } from "../redux/slices/realtime/index";

export default function Main_data(props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetch_realtime() {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: props.data },
        headers: {
          "x-rapidapi-key":
            "fdab083b45msh9932602cddafef5p1a1373jsnbd7e00b1b706", //ashok2007das api
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);

        //logs
        // console.log(response.data.location.name);
        // console.log(response.data.location.localtime);
        // console.log(response.data.current.temp_c);
        // console.log(response.data.current.uv);
        // console.log(response.data.current.wind_kph);
        // console.log(response.data.current.wind_dir);
        // console.log(response.data.current.feelslike_c);

        dispatch(
          setMainTempData({
            city: response.data.location.name,
            country: response.data.location.country,
            localtime: response.data.location.localtime,
            temperature: response.data.current.temp_c,
            weathercond: response.data.current.condition.text,
            icon: response.data.current.condition.icon,
            weathercode: response.data.current.condition.code,
          })
        );

        dispatch(
          setRealTimeData({
            uv: response.data.current.uv,
            windspeed: response.data.current.wind_kph,
            winddir: response.data.current.wind_dir,
            feelslike: response.data.current.feelslike_c,
            humidity: response.data.current.humidity,
          })
        );
      } catch (error) {
        console.error(error);
        // setError(true);
      }
    }

    if (props.data) {
      fetch_realtime();
    }
  }, [props.data]);

  return;
}
