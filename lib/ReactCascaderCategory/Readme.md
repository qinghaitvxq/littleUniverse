```js
import React, { useState } from "react";

const [value, setValue] = useState([10, 113]);
const treeData = [
  {
    key: 10,
    value: 10,
    title: "美食",
    children: [
      {
        key: 132,
        value: 132,
        title: "咖啡",
        children: [],
      },
      {
        key: 113,
        value: 113,
        title: "日本料理",
        children: [
          {
            key: 2821,
            value: 2821,
            title: "日式火锅",
            children: [
              {
                key: 1234,
                value: 1234,
                title: "寿喜锅",
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 50,
    value: 50,
    title: "丽人",
    children: [
      {
        key: 157,
        value: 157,
        title: "美发",
        children: [],
      },
      {
        key: 34199,
        value: 34199,
        title: "植发",
        children: null,
      },
      {
        key: 183,
        value: 183,
        title: "医学美容",
        children: [
          {
            key: 34199,
            value: 34199,
            title: "植发",
            children: null,
          },
        ],
      },
    ],
  },
  {
    key: 20,
    value: 20,
    title: "购物",
  },
];

const onChangeHandler = (val) => {
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
  treeData={treeData}
  onChange={onChangeHandler}
  value={value}
/>;
```
