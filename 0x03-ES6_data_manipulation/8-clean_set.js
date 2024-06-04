/**
 *
 * @param {Set} set
 * @param {String} startString
 */
export default function cleanSet(set, startString) {
  let ans = "";
  if (startString == "") {
    return "";
  }
  set.forEach((x) => {
    if (x.startsWith(startString)) {
      ans += x.replace(startString, "") + "-";
    }
  });
  return ans.slice(0, -1);
}
