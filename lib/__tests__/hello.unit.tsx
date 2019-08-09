import renderer from "react-test-renderer";
import React from "react";
import Button from "../button";

test("hello", () => {
  expect(1).toEqual(1);
});

describe("我的第一个测试用例", () => {
  it("1等于1", () => {
    expect(1).toEqual(1);
  });
});

describe("button tests", () => {
  it("是个div", () => {
    //console.log("renderer---", renderer);
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
