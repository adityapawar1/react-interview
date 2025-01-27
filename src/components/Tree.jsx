import React from "react";
import "./Components.css";

export default function Tree(props) {
  return (
    <div className="tree">
      <img
        className="tree-image"
        src={props.imageLink}
      />

      <div className="tree-information">
        {/* The human readable (non-scrientific) name of this tree */}
        <h2>{props.name}</h2>
        {/* A short description of this tree */}
        <p>{props.description}</p>
        {/* The date the tree was added to our database */}
        <h4>{props.dateAdded}</h4>
      </div>
    </div>
  );
}
