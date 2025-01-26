import React from "react";
import "./Components.css";

export default function Event(props) {
  return (
    <div className="event">
      <img
        className="event-image"
        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
      />

      <div className="event-information">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h4>{props.dateTime}</h4>
      </div>
    </div>
  );
}
