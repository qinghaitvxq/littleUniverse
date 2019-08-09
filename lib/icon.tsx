import React from "react";
// import "../icons/wechat.svg";
// import "../icons/donuts.svg";
import "./importIcons";

interface IconProps {
  name: string;
}
// 知识点：React+typescript  typescrpt 泛型（类型接受一个参数）
const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};
export default Icon;
