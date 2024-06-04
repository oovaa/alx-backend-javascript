/**
 *
 * @param {Set} set
 * @param {String} startString
 */
export default function cleanSet(set, startString) {
  let ans = [];
  if (
    !set ||
    !startString ||
    !(set instanceof Set) ||
    typeof startString !== 'string'
  )
    return '';

  set.forEach((x) => {
    if (typeof x === 'string' && x.startsWith(startString)) {
      const xSubStr = x.substring(startString.length);
      ans.push(xSubStr);
    }
  });
  return ans.join('-');
}
