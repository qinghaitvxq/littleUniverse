const buildLevelDesc = (dataSource) => {
  if (!dataSource || dataSource.length === 0) return [];
  const handleItemObject = (item) => {
    const tempArray = [item];
    item.levelDesc = item.title;
    while (tempArray.length > 0) {
      const node = tempArray.shift();
      if (node.children && node.children.length > 0) {
        node.children.forEach((x) => {
          x.levelDesc = `${node.levelDesc}>${x.title}`;
        });
        tempArray.unshift(...node.children);
      }
    }
  };
  dataSource.forEach((x) => {
    handleItemObject(x);
  });
  return dataSource;
};

const findNodeByKey = (target, dataSource) => {
  const root = {
    key: -1,
    value: -1,
    title: "-1",
    children: dataSource,
  };
  const tempArray = [root];
  let current = root;
  while (tempArray.length > 0 && current.key.toString() !== target.toString()) {
    current = tempArray.shift();
    if (current.children && current.children.length > 0) {
      tempArray.push(...current.children);
    }
  }
  if (tempArray.length === 0 && current.key !== target) return null;
  return current;
};

export { findNodeByKey, buildLevelDesc };
