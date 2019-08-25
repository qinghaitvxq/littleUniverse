import React from "react";
import styles from "./content.scss";
import classnames from "../helpers/classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;

  return (
    <div
      className={classnames(
        `${(styles.content && styles.content) || ""}`,
        className
      )}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Content;
