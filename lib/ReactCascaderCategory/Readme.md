```js
import React, { useState, useEffect } from "react";
import { categoryTreeDataMock } from "./mockData";

const [value, setValue] = useState([10, 21, 113]);

const onChangeHandler = (val) => {
  console.log("onChangeHandler", value);
  if (value.findIndex((x) => x === val) !== -1) {
    //删除
    const newVal = value.filter((x) => x !== val);
    setValue(newVal);
  } else {
    //新增
    setValue([...value, val]);
  }
};

<ReactCascaderCategory
  treeData={categoryTreeDataMock}
  onChange={onChangeHandler}
  value={value}
/>;
```
