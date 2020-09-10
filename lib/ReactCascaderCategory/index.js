import React from "react";
import PropTypes from "prop-types";
import InputBar from "./InputBar";
import CascaderTree from "./CascaderTree";
import { buildLevelDesc, findNodeByKey } from "./helper.js";

import "./index.scss";

function ReactCascaderCategory({ treeData, value, onChange }) {
  const transTreeData = buildLevelDesc(treeData);
  const onValueChange = (val) => {
    let newValue = [];
    if (value.findIndex((x) => x === val) !== -1) {
      //删除
      newValue = value.filter((x) => x !== val);
    } else {
      newValue = [...value, val];
    }
    onChange(newValue, val);
  };

  return (
    <div>
      <InputBar
        value={value}
        onChange={onValueChange}
        treeData={transTreeData}
      />
      <CascaderTree
        treeData={transTreeData}
        onChange={onValueChange}
        value={value}
      />
    </div>
  );
}
ReactCascaderCategory.propTypes = {
  /** 控件数据源 */
  treeData: PropTypes.array,
  /** 控件值 */
  value: PropTypes.array,
  /** 选中树节点时调用此函数, function(value,current){...} */
  onChange: PropTypes.func,
};
ReactCascaderCategory.defaultProps = {
  treeData: [],
  value: [],
  onChange: () => {},
};

export default ReactCascaderCategory;
