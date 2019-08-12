import classnames from "../classnames";

describe("classnames", () => {
  it("接受一个className", () => {
    const result = classnames("a");
    expect(result).toEqual("a");
  });
  it("接受2个classname", () => {
    const result = classnames("a", "b");
    expect(result).toEqual("a b");
  });
  it("接受undefined,结果不出现undefined", () => {
    const result = classnames("a", undefined);
    expect(result).toEqual("a");
  });
  it("接受奇怪值", () => {
    const result = classnames("a", undefined, "中文", false, null);
    expect(result).toEqual("a 中文");
  });
  it("接受0个参数", () => {
    const result = classnames();
    expect(result).toEqual("");
  });
});
// 行为驱动测试
