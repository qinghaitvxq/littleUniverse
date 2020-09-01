import React, { useRef, useState } from "react";
import { Select, Divider, Button } from "antd";
const { Option } = Select;

function SelectAll(props) {
  const { setValueHandler, ...restProps } = props;
  let selectEl = useRef(null);

  const selectAllItems = () => {
    const all = selectEl.current.props.children.map((item) => item.key);
    setValueHandler(all);
  };
  const cancelAll = () => {
    setValueHandler([]);
  };

  return (
    <Select
      mode="multiple"
      {...restProps}
      ref={selectEl}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <Button type="primary" onClick={selectAllItems}>
            全选
          </Button>
          <Button type="ghost" onClick={cancelAll}>
            取消
          </Button>
        </div>
      )}
    >
      {props.children}
    </Select>
  );
}
SelectAll.Option = Option;

export default SelectAll;
