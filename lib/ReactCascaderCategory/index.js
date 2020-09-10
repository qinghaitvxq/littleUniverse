import React from "react";
import PropTypes from "prop-types";
import InputBar from "./InputBar";
import CascaderTree from "./CascaderTree";
import { buildLevelDesc, findNodeByKey } from "./helper.js";

import "./index.scss";

function ReactCascaderCategory({ treeData, value, onChange }) {
  const transTreeData = buildLevelDesc(treeData);

  return (
    <div>
      <InputBar value={value} onChange={onChange} treeData={transTreeData} />
      <CascaderTree
        treeData={transTreeData}
        onChange={onChange}
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
  /** 选中树节点时调用此函数, function(value){...} */
  onChange: PropTypes.func,
};
ReactCascaderCategory.defaultProps = {
  treeData: [],
  value: [],
  onChange: () => {},
};

export default ReactCascaderCategory;
