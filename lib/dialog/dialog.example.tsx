import React, { useState } from "react";
import Dialog,{alert,confirm,modal} from "./dialog";


export default function() {
  const [x, setX] = useState(false);
  const [y, setY]=useState(false);
  const openModal=()=>{
    const close=modal(<h1>
      你好
      <button onClick={()=>close()}>close</button>
      </h1>)
  }
  return (
    <div>
    <div>
      <h1>Example 1</h1>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x} 
      buttons={
        [
          <button onClick={()=>{setX(false)}}>11</button>,
          <button onClick={()=>{setX(false)}}>22</button>
        ]
       }
       onClose={()=>{setX(false)}}
      >
        <div>hello world</div>
      </Dialog>
    </div>
     <div>
     <h1>Example 2</h1>
     <button onClick={() => setY(!y)}>click</button>
     <Dialog visible={y} 
     buttons={
       [
         <button onClick={()=>{setY(false)}}>11</button>,
         <button onClick={()=>{setY(false)}}>22</button>
       ]
      }
      onClose={()=>{setY(false)}}
      closeOnClickMask={true}
     >
       <div>hello world</div>
     </Dialog>
   </div>
   <div>
     <h1>Example 3</h1>
     <button onClick={()=>alert('hello')}>alert</button>
     <button onClick={()=>confirm('test',()=>{ console.log('click yes')},()=>{console.log('click no')})}>confirm</button>
   </div>
   <div>
     <h1>Example 4</h1>
     <button onClick={openModal}>modal</button>
    
   </div>
   </div>
  );
}
