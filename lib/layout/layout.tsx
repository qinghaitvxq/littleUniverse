import React, { ReactElement } from "react";
import styles from "./layout.scss";
import Aside from "./aside";
//import Header from "./header";
import classnames from "../helpers/classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  const childrenAsArray = props.children as Array<ReactElement>;

  const hasAside =
    childrenAsArray &&
    childrenAsArray.reduce(
      (result, node) => result || node.type === Aside,
      false
    );

  return (
    <div
      className={classnames(
        `${(styles.layout && styles.layout) || ""}`,
        className,
        (hasAside && styles.hasAside) || ""
      )}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export default Layout;

export { Layout };
export { default as Header } from "./header";
export { default as Content } from "./content";
export { default as Footer } from "./footer";
export { default as Aside } from "./aside";
