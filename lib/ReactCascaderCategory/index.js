import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

function ReactCascaderCategory({ treeData, value, onChange }) {
  return (
    <div>
      <div className="inputBar" style={{ width: "200px" }}>
        <div contentEditable className="input-div-normal">
          items
        </div>
      </div>
      <div className="cascader-container">
        <div className="cascader-div-normal">
          <ul className={"cascader-ul ul-first"}>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">美食</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">k歌</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">购物</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">娱乐休闲</span>
              </div>
              <div>&gt;</div>
            </li>
          </ul>
        </div>

        <div className="cascader-div-normal">
          <div className="select-all">
            <input type="checkbox" />
            <span>全部</span>
          </div>

          <ul className={"cascader-ul"}>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">酒店宴会厅</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">场地布置</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">宝宝宴</span>
              </div>
              <div>&gt;</div>
            </li>
          </ul>
        </div>

        <div className="cascader-div-normal">
          <div className="select-all">
            <input type="checkbox" />
            <span>全部</span>
          </div>

          <ul className={"cascader-ul"}>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">游轮婚礼</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">星级酒店</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">特色餐厅</span>
              </div>
              <div>&gt;</div>
            </li>
            <li className="cascader-li-item">
              <div>
                <input type="checkbox" />
                <span className="li-span">婚礼会所</span>
              </div>
              <div>&gt;</div>
            </li>
          </ul>
        </div>
      </div>
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
