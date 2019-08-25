import React from "react";
import styles from "./footer.scss";
import classnames from "../helpers/classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}
const Footer: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;

  return (
    <div
      className={classnames(
        `${(styles.footer && styles.footer) || ""}`,
        className
      )}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Footer;
