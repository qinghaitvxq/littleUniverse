const nodeHasChildren = (item) => {
  if (!item.children) return false;
  return item.children.length > 0;
};
const isNodeChecked = (value, checkedItem) => {
  return checkedItem.findIndex((x) => x === value) > -1;
};

const buildNewCategory = (category) => {
  category.forEach((element) => {
    const arr = [element];
    // 添加levelDesc 字段
    element.levelDesc = element.title;
    while (arr.length) {
      const node = arr.shift();
      if (nodeHasChildren(node)) {
        const relationCNodes = node.children.map((x) => {
          return {
            ...x,
            levelDesc: `${node.levelDesc}>${x.title}`,
          };
        });
        arr.unshift(...relationCNodes);
        node.children = relationCNodes;
      }
    }
  });
  return category;
};

/**
 *
 * @param {*} value 目标值 number || array
 * @param {*} category  集合值
 */
const findNodes = (value, category) => {
  const results = [];
  const compareLogin = (node, targetVal) => {
    if (Array.isArray(targetVal)) {
      // eslint-disable-next-line
      return (
        (targetVal && targetVal.findIndex((v) => v == node.value) > -1) || false
      );
    } else {
      // eslint-disable-next-line
      return node.value == targetVal;
    }
  };

  category.forEach((element) => {
    const arr = [element];
    while (arr.length) {
      const node = arr.shift();
      // if (node.value === value) {
      //   results.push(node);
      // }
      if (compareLogin(node, value)) {
        results.push(node);
      }
      if (nodeHasChildren(node)) {
        arr.unshift(...node.children);
      }
    }
  });
  return results;
};

/**
 *
 * @param {*} inputText 用户输入
 * @param {*} treeData
 */
const matchInput = (inputText, treeData) => {
  // let searchResult = [];
  // console.log('treeData', treeData);
  // const testItemData = [
  //   {
  //     title: '11111ssss',
  //     value: '1111111',
  //   },
  //   {
  //     title: '122222',
  //     value: '122222',
  //   },
  //   {
  //     title: '33333',
  //     value: '33333',
  //   },
  // ];
  // searchResult = testItemData;
  // return searchResult;

  const results = [];

  const isMatch = (node, inputText) => {
    const { levelDesc } = node;
    // const reg=RegExp(/\$\{inputText\}/);
    // return levelDesc.match(reg);
    return levelDesc.indexOf(inputText) > -1;
  };

  treeData.forEach((element) => {
    const arr = [element];
    while (arr.length) {
      const node = arr.shift();
      if (isMatch(node, inputText)) {
        results.push(node);
      }
      if (nodeHasChildren(node)) {
        arr.unshift(...node.children);
      }
    }
  });
  return results;
};
/**
 * 一维数组去重
 * @param {*} sourceArr
 */
const uniqueArray = (sourceArr) => {
  if (!Array.isArray(sourceArr)) return null;
  return Array.prototype.filter.call(sourceArr, (item, index) => {
    return sourceArr.indexOf(item) === index;
  });
};

/**
 * 取消选择
 * @param {*} sourceValue
 * @param {*} targetNodes
 */
const unSelectNodes = (sourceValue, targetNodes) => {
  let newValues = [];
  newValues = sourceValue.filter(
    (v) => targetNodes.findIndex((t) => t === v) === -1
  );
  return newValues;
};
export {
  unSelectNodes,
  matchInput,
  nodeHasChildren,
  isNodeChecked,
  buildNewCategory,
  findNodes,
  uniqueArray,
};
