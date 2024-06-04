/**
 * @param {Set} set
 * @param {Array} array
 * @returns {boolean}
 */
export default function hasValuesFromArray(set, array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!set.has(element)) return false;
  }
  return true;
}
