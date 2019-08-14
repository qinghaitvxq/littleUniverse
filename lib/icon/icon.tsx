import React from "react";
// import "../icons/wechat.svg";
// import "../icons/donuts.svg";
import "./importIcons";
//import "./icon.scss";
import styles from "./icon.scss";
import classnames from "../helpers/classnames";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  //onClick: React.MouseEventHandler<SVGElement>;
}

// 知识点：React+typescript  typescrpt 泛型（类型接受一个参数）
const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classnames(styles.icon, className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
export default Icon;

// tree-shaking 技术 基础是静态引入
// 静态引入 import something from somefile
// 动态加载 import()
// 非静态引入 importAll
