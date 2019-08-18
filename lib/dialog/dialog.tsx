import React, { Fragment, ReactElement } from "react";
import ReactDOM from 'react-dom';
// import "./dialog.scss";
import Icon from "../icon/icon";
import styles from "./dialog.scss";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose:React.MouseEventHandler;
  closeOnClickMask?:boolean;
}

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose:React.MouseEventHandler=(e)=>{
    props.onClose(e);
  }
  const onClickMask:React.MouseEventHandler=(e)=>{
    if(props.closeOnClickMask){
      props.onClose(e);
    }
  }
  const x= props.visible ? (
    <Fragment>
      <div className={styles.dialogMask} onClick={onClickMask} />
      <div className={styles.dialog}>
        <div className={styles.dialogClose} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={styles.dialogHeader}>提示</header>
        <main className={styles.dialogMain}>{props.children}</main>
        <footer className={styles.dialogFooter}>
          {/* <button>ok</button>
          <button>cancel</button> */}
          {props.buttons}
        </footer>
      </div>
    </Fragment>
  ) : null;
  return (
    ReactDOM.createPortal(x,document.body)
  );
};

const alert=(content:string)=>{
   const component=<Dialog visible={true} onClose={()=>{
     ReactDOM.render(React.cloneElement(component,{visible:false}),div);
     ReactDOM.unmountComponentAtNode(div);
     div.remove();
   }}>{content}</Dialog>;
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}
export {alert};
export default Dialog;
