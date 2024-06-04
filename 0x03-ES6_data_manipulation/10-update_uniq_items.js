/**
 *  task 10
 * @param {Map} map
 */
export default function updateUniqueItems(map) {
  map.forEach((v, k) => {
    if (v == 1) map.set(k, 100);
  });
}
