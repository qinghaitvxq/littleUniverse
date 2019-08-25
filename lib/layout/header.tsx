import React from "react";
import styles from "./header.scss";
import classnames from "../helpers/classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}
const Header: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;

  return (
    <div
      className={classnames(
        `${(styles.header && styles.header) || ""}`,
        className
      )}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Header;
