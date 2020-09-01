import React, { useState } from "react";
import ReactDOM from "react-dom";

import Icon from "./lib/Icon";
import DrawImageCenter from "./lib/DrawImageCenter";
import SelectAll from "./lib/SelectAll";

const { Option } = SelectAll;
const selectDatas = ["Lucy", "Jack", "Cat"];

function ComponentsList() {
  const [selectValue, setselectvalue] = useState(["Lucy"]);
  const imageUrl =
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598442841718&di=a22e655c5a65db3bb41e391a7f18ede0&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170707%2F16f01d1c7ccc4b54bb51fa6f01ef03b4_th.png";
  const onDrawCompleteHandler = (info) => {
    console.log("onDrawCompleteHandler", info);
  };

  return (
    <div>
      <Icon name="ghost" />
      {/* <DrawImageCenter
        imageUrl={imageUrl}
        onDrawComplete={onDrawCompleteHandler}
        center={{ x: 34, y: 34 }}
        style={{ width: "15%", marginLeft: "20px" }}
      /> */}

      <SelectAll
        style={{ width: 240 }}
        value={selectValue}
        placeholder="请选择"
        setValueHandler={setselectvalue}
        onChange={setselectvalue}
      >
        {selectDatas.map((item) => (
          <Option key={item.toString()}>{item}</Option>
        ))}
      </SelectAll>
    </div>
  );
}

ReactDOM.render(<ComponentsList />, document.querySelector("#root"));
