import React from "react";
import vampire from "./svg/vampire.svg";

function Icon() {
  return (
    <div>
      I'm a Icon
      <svg>
        <use xlinkHref={`#${vampire.id}`}></use>
      </svg>
    </div>
  );
}

export default Icon;
