function classnames(...names: (string | undefined)[]) {
  // return names.filter(x => x).join(" ");
  console.log("测试", names);
  return names.filter(Boolean).join(" ");
}
export default classnames;
