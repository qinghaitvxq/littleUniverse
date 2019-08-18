import React, { useState } from "react";
import Dialog,{alert} from "./dialog";


export default function() {
  const [x, setX] = useState(false);
  const [y, setY]=useState(false);
  return (
    <div>
    <div  style={{border:'solid 1px red'}}>
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
     <h2>Example 3</h2>
     <button onClick={()=>alert('hello')}>alert</button>
   </div>
   </div>
  );
}
