import React, { Fragment, ReactElement, ReactNode } from "react";
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
          {props.buttons.map((b,index)=>React.cloneElement(b,{key:index}))}
         </footer>
        }
       
      </div>
    </Fragment>
  ) : null;
  return (
    ReactDOM.createPortal(x,document.body)
  );
};

const modal=(content:ReactNode,buttons?:Array<ReactElement>,afterClose?:()=>void)=>{
  const close=()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
 }
  const component=<Dialog 
     visible={true}
     buttons={buttons}
     onClose={()=>{
       close();
       afterClose && afterClose();
     }}>{content}</Dialog>;
   const div=document.createElement('div');
   document.body.append(div);
   ReactDOM.render(component,div);
   return close;
}
const alert=(content:string)=>{
  const button=<button onClick={()=>close()}>OK</button>;
  const close=modal(content,[button]);   
}
const confirm=(content:string,yes?:()=>void,no?:()=>void)=>{

  const onYes=()=>{
    close();
    yes&&yes();
   };
   const onNO=()=>{
    no && no();
    close();
   
   };
   const buttons=[<button onClick={onYes}>yes</button>,<button onClick={onNO}>no</button>];
   const close=modal(content,buttons,no);
}
export {alert,confirm,modal};
export default Dialog;
