// import React from "react";
// import ReactDOM from "react-dom";
// export { default as Icon } from "./icon/icon";

// const fn: React.MouseEventHandler = e => {
//   console.log(e.target);
//   //console.log((e.target as HTMLDivElement).style); // 断言
// };
// ReactDOM.render(
//   <div>
//     <Icon
//       name="donuts"
//       onMouseEnter={() => {
//         console.log("enter");
//       }}
//       onMouseLeave={() => {
//         console.log("leave");
//       }}
//       onClick={fn}
//     />
//   </div>,
//   document.getElementById("root")
// );

import "./index.scss";
import Icon from "./icon/icon";
import Dialog from './dialog/dialog';
export { Icon,Dialog };

// 建轮子步骤  借鉴同行

// 1.UI
// 2.API
