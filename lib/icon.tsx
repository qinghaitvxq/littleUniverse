import React from "react";
// import "../icons/wechat.svg";
// import "../icons/donuts.svg";
import "./importIcons";
import "./icon.scss";

interface IconProps {
  name: string;
  onClick: (e: React.MouseEvent) => void;
  //onClick: React.MouseEventHandler<SVGAElement>;
}
// 知识点：React+typescript  typescrpt 泛型（类型接受一个参数）
const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="universe-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};
export default Icon;

// tree-shaking 技术 基础是静态引入
// 静态引入 import something from somefile
// 动态加载 import()
// 非静态引入 importAll
