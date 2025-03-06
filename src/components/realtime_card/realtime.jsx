import React from "react";
import { useAppSelector } from "../../redux/hooks";

export default function Realtime() {
  const real = useAppSelector((state) => state.realtime);

  console.log(real.uv);

  const realtime = [
    {
      id: 1,
      name: "UV",
      content: real.uv,
    },
    {
      id: 2,
      name: "Wind (kph)",
      content: real.windspeed,
    },
    {
      id: 3,
      name: "Wind Direction",
      content: real.winddir,
    },
    {
      id: 4,
      name: "Feels Like",
      content: real.feelslike + " C",
    },
    {
      id: 5,
      name: "Humidity",
      content: real.humidity,
    },
  ];
  return (
    <div className="realtime-card-content">
      {realtime.map((event) => (
        <div className="realtime-data-card">
          <div className="realtime-heading">{event.name}</div>
          <div className="realtime-content">{event.content}</div>
        </div>
      ))}
    </div>
  );
}
