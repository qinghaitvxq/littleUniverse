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
  treeData: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
};
ReactCascaderCategory.defaultProps = {
  treeData: [],
  value: [],
  onChange: () => {},
};

export default ReactCascaderCategory;
