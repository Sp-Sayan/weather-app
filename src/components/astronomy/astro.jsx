import React from "react";

export default function astro(props) {
  const astro = [
    {
      id: 1,
      name: "Sunrise",
      content: props.sunrise,
    },
    {
      id: 2,
      name: "Sunset",
      content: props.sunset,
    },
    {
      id: 3,
      name: "Moonrise",
      content: props.moonrise,
    },
    {
      id: 4,
      name: "Moonset",
      content: props.moonset,
    },
  ];

  return (
    <div className="astro-card-content">
      {astro.map((event) => (
        <div className="astro-data-card">
          <div className="astro-heading">{event.name}</div>
          <div className="astro-content">{event.content}</div>
        </div>
      ))}
    </div>
  );
}
