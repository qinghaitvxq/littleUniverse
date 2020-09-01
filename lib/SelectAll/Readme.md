```js
import React, { useState } from "react";
const selectDatas = ["Lucy", "Jack", "Cat"];

const [selectValue, setselectvalue] = useState(["Lucy"]);

const onDrawCompleteHandler = (info) => {
  console.log("onDrawCompleteHandler", info);
};

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
</SelectAll>;
```
