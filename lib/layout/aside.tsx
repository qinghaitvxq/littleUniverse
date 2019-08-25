import React from "react";
import styles from "./aside.scss";
import classnames from "../helpers/classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}
const Aside: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;

  return (
    <div
      className={classnames(
        `${(styles.aside && styles.aside) || ""}`,
        className
      )}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Aside;
