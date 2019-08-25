function classnames(...names: (string | undefined)[]) {
  // return names.filter(x => x).join(" ");
  return names.filter(Boolean).join(" ");
}
export default classnames;
