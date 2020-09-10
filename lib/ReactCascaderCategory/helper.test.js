import { findNodeByKey, buildLevelDesc } from "./helper";
import { categoryTreeDataMock } from "./mockData";

test("findNodeByKey:find", () => {
  const expection = findNodeByKey(21, categoryTreeDataMock);
  const result = {
    key: 21,
    value: 21,
    title: "test2",
  };
  expect(expection).toEqual(result);
});
test("findNodeByKey: no match", () => {
  const expection = findNodeByKey(233331, categoryTreeDataMock);
  const result = null;
  expect(expection).toEqual(result);
});

test("buildLevelDesc", () => {
  const mockData = [
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
      ],
    },
  ];
  const expection = buildLevelDesc(mockData);
  const result = [
    {
      key: 10,
      value: 10,
      title: "美食",
      levelDesc: "美食",
      children: [
        {
          key: 132,
          value: 132,
          title: "咖啡",
          levelDesc: "美食>咖啡",
          children: [],
        },
      ],
    },
  ];
  expect(expection).toEqual(result);
});
