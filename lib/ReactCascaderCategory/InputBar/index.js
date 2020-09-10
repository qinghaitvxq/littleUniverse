import React from "react";
import PropTypes from "prop-types";
import { findNodeByKey } from "../helper.js";
import "./index.scss";

function InputBar({ value, onChange, treeData }) {
  const removeItem = (item) => {
    onChange(item);
  };
  const renderItems = (value) => {
    return (
      value &&
      value.map((x, index) => {
        const levelDesc = findNodeByKey(x, treeData).levelDesc;
        return (
          <div className={"container-item-input"} title={levelDesc} key={index}>
            <span className="container-item-text">{levelDesc}</span>
            <span
              className="container-item-remove"
              onClick={removeItem.bind(null, x)}
            >
              &times;
            </span>
          </div>
        );
      })
    );
  };
  return (
    <div className="inputBar" style={{ width: "200px" }}>
      <div className="input-div-normal">{renderItems(value)}</div>
    </div>
  );
}
InputBar.propTypes = {
  name: PropTypes.string,
};
InputBar.defaultProps = {
  name: "ghost",
};

export default InputBar;
