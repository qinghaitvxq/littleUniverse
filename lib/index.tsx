import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon/icon";

const fn: React.MouseEventHandler = e => {
  console.log(e.target);
  //console.log((e.target as HTMLDivElement).style); // 断言
};
ReactDOM.render(
  <div>
    <Icon
      name="donuts"
      onMouseEnter={() => {
        console.log("enter");
      }}
      onMouseLeave={() => {
        console.log("leave");
      }}
      onClick={fn}
    />
  </div>,
  document.getElementById("root")
);
