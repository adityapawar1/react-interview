import React from "react";
import "./Components.css";

export default function Tree({ dateAdded, name, description }) {
  const favorited = React.useState(false);
  const favoritedClass = favorited ? "" : "tree-favorited";

  /* Convert date to human readable format */
  // Create new date object, so we can use built in Date functions to convert it to a human readable format
  let dateObject = Date(dateAdded);
  // Not sure what this argument is supposed to be (what is "en-GB"?)
  let humanReadableDate = dateObject.toLocaleString("en-GB");

  return (
    <div className={"tree " + favoritedClass}>
      <img
        className="tree-image"
        src={props.imageLink}
        width={120}
        height={120}
      />

      <div className="tree-information">
        {/* The human readable (non-scrientific) name of this tree */}
        <div className="tree-header">
          <h2 className="tree-name">{name}</h2>
          <button className="tree-button" onClick={() => favorited}>
            Favorite
          </button>
        </div>
        {/* A short description of this tree */}
        <p className="tree-description">{description}</p>
        {/* The date the tree was added to our database */}
        <p>
          <strong>Date Added: {humanReadableDate}</strong>
        </p>
      </div>
    </div>
  );
}
