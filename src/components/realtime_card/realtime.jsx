import React from "react";

export default function Realtime(props) {
  const realtime = [
    {
      id: 1,
      name: "UV",
      content: props.uv,
    },
    {
      id: 2,
      name: "Wind (kph)",
      content: props.windspeed,
    },
    {
      id: 3,
      name: "Wind Direction",
      content: props.winddir,
    },
    {
      id: 4,
      name: "Feels Like",
      content: props.feelslike + " C",
    },
    {
      id: 5,
      name: "Humidity",
      content: props.humidity,
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
