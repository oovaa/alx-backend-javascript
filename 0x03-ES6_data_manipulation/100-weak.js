let weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  let last = weakMap.get(endpoint);
  if (last >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, last + 1);
}

export { queryAPI, weakMap };
