import React from "react";
import vampire from "../svg/vampire.svg";
import ghost from "../svg/ghost.svg";
import "./index.scss";

function Icon({ name }) {
  return (
    <div>
      <svg className="lu-icon">
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </div>
  );
}

export default Icon;
