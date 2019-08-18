import React, { Fragment, ReactElement, ReactNode, ReactFragment } from "react";
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
        {
          props.buttons && props.buttons.length>0 &&
          <footer className={styles.dialogFooter}>
          {props.buttons}
         </footer>
        }
       
      </div>
    </Fragment>
  ) : null;
  return (
    ReactDOM.createPortal(x,document.body)
  );
};

const alert=(content:string)=>{
  const onClose=()=>{
     ReactDOM.render(React.cloneElement(component,{visible:false}),div);
     ReactDOM.unmountComponentAtNode(div);
     div.remove();
  }
   const component=<Dialog 
      visible={true}
      buttons={[<button onClick={onClose}>OK</button>]}
      onClose={onClose}>{content}</Dialog>;
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}
const confirm=(content:string,yes?:()=>void,no?:()=>void)=>{
   const onYes=()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes&&yes();
   };
   const onNO=()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
   };
   const component=(<Dialog 
    visible={true} 
    onClose={onNO}
    buttons={[<button onClick={onYes}>yes</button>,<button onClick={onNO}>no</button>]}
    >
      {content}
    </Dialog>);
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}
const modal=(content:ReactNode|ReactFragment)=>{
  const onClose=()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component=<Dialog onClose={onClose} visible={true}>
    {content}
  </Dialog>;
  const div=document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component,div);
  return onClose;
}
export {alert,confirm,modal};
export default Dialog;
