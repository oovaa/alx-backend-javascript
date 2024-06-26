export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  let last = weakMap.get(endpoint);

  weakMap.set(endpoint, last + 1);
  if (last + 1 >= 5) throw new Error('Endpoint load is high');
}
