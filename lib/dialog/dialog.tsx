import React, { Fragment } from "react";
// import "./dialog.scss";
import Icon from "../icon/icon";
import styles from "./dialog.scss";

interface Props {
  visible: boolean;
}

const Dialog: React.FunctionComponent<Props> = props => {
  return props.visible ? (
    <Fragment>
      <div className={styles.dialogMask} />
      <div className={styles.dialog}>
        <div className={styles.dialogClose}>
          <Icon name="close" />
        </div>
        <header className={styles.dialogHeader}>提示</header>
        <main className={styles.dialogMain}>{props.children}</main>
        <footer className={styles.dialogFooter}>
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </Fragment>
  ) : null;
};

export default Dialog;
