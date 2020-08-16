import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon";

function ComponentsList() {
  return (
    <div>
      <Icon name="ghost" />
      <Icon name="vampire" />
    </div>
  );
}

ReactDOM.render(<ComponentsList />, document.querySelector("#root"));
