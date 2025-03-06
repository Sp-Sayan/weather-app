import React from "react";
import { useAppSelector } from "../../redux/hooks";

export default function astro() {
  const astronomy = useAppSelector((state) => state.astro);

  const astro = [
    {
      id: 1,
      name: "Sunrise",
      content: astronomy.sunrise,
    },
    {
      id: 2,
      name: "Sunset",
      content: astronomy.sunset,
    },
    {
      id: 3,
      name: "Moonrise",
      content: astronomy.moonrise,
    },
    {
      id: 4,
      name: "Moonset",
      content: astronomy.moonset,
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
