let weakMap = new WeakMap();

function queryAPI(endpoint) {
  let last = weakMap.get(endpoint) || 0;
  if (last >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, last + 1);
}

export { queryAPI, weakMap };
