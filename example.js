import React from "react";
import ReactDOM from "react-dom";
import "./example.scss";
import Icon from "./lib/Icon";
import DrawImageCenter from "./lib/DrawImageCenter";

function ComponentsList() {
  const imageUrl =
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598442841718&di=a22e655c5a65db3bb41e391a7f18ede0&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170707%2F16f01d1c7ccc4b54bb51fa6f01ef03b4_th.png";
  const onDrawCompleteHandler = (info) => {
    console.log("onDrawCompleteHandler", info);
  };
  return (
    <div>
      <Icon name="ghost" />
      <DrawImageCenter
        imageUrl={imageUrl}
        onDrawComplete={onDrawCompleteHandler}
        center={{ x: 34, y: 34 }}
        style={{ width: "15%", marginLeft: "20px" }}
      />
    </div>
  );
}

ReactDOM.render(<ComponentsList />, document.querySelector("#root"));
