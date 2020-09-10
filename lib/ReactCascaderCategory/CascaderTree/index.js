import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { findNodeByKey } from "../helper";
import "./index.scss";

function CascaderTree({ treeData, onChange, value }) {
  const [currentKeyArray, setCurrentKeyArray] = useState([
    { level: 0, key: null },
  ]);

  const onCurrentKeyChange = ({ level, key, hasChildren }) => {
    /**
     * 1. 更新自己层级上的key值,清空下级
     * 2. 如果当前的key值 children exist && children.length>0 && level=+1 的层级不存在
     *    add { level:+1,key:null} to currentKeyArray
     */
    const copyArray = currentKeyArray.filter((x) => x.level <= level);
    copyArray[level].key = key;

    if (
      hasChildren &&
      !(copyArray.findIndex((x) => x.level === level + 1) > -1)
    ) {
      copyArray.push({ level: level + 1, key: null });
    }
    setCurrentKeyArray(copyArray);
  };

  const renderCategory = ({ level, key, index }) => {
    /** 第一层（level=0）默认展示第一级别节点
     *  从第二层开始，如果 level-1 层的 key !==null, 则渲染
     */
    let renderTarget = [];
    if (level === 0) {
      renderTarget = treeData;
    }

    if (level > 0) {
      const parent = currentKeyArray.find((x) => x.level === level - 1).key;

      renderTarget = findNodeByKey(parent, treeData).children;
    }

    return (
      <div className="cascader-div-normal" key={index}>
        <ul className={"cascader-ul"}>
          {renderTarget.map((category, index) => {
            return (
              <li
                key={index}
                className="cascader-li-item"
                onClick={onCurrentKeyChange.bind(null, {
                  level,
                  key: category.key,
                  hasChildren:
                    category.children && category.children.length > 0,
                })}
              >
                <div>
                  <input
                    type="checkbox"
                    onChange={onSelect.bind(null, category.key)}
                    checked={isChecked(category.key)}
                    key={index}
                  />
                  <span className="li-span">{category.title}</span>
                </div>
                {category.children && category.children.length > 0 ? (
                  <div>&gt;</div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const onSelect = (val) => {
    onChange(val);
  };
  const isChecked = (val) => {
    return value.findIndex((x) => x === val) > -1;
  };

  return (
    <div className="cascader-container">
      {currentKeyArray.map((item, index) => {
        return renderCategory({ ...item, index });
      })}
    </div>
  );
}
CascaderTree.propTypes = {
  treeData: PropTypes.array,
};
CascaderTree.defaultProps = {
  treeData: [],
};

export default CascaderTree;
