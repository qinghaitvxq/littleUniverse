import React from "react";
import vampire from "../svg/vampire.svg";
import ghost from "../svg/ghost.svg";
import PropTypes from "prop-types";

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
Icon.propTypes = {
  /** icon's name */
  name: PropTypes.string,
};
Icon.defaultProps = {
  name: "ghost",
};

export default Icon;
