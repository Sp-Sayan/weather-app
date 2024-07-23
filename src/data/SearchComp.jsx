import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchComp(props) {
  const [result, setResult] = useState([
    {
      name: "No Result Found",
      region: "",
    },
  ]);
  useEffect(() => {
    const searchcomp = () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/search.json",
        params: { q: props.data },
        headers: {
          "x-rapidapi-key":
            "fdab083b45msh9932602cddafef5p1a1373jsnbd7e00b1b706",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      async function fetch() {
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setResult(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetch();
    };
    if (props.data) {
      searchcomp();
    }
  }, []);

  const sendSearch = () => {
    props.onFetchSearchResult(result);
  };
  if (props.data) {
    sendSearch();
  }

  return;
}
