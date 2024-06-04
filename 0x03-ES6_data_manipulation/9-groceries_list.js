export default function groceriesList() {
  let data = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  let ans = new Map(Object.entries(data));
  return ans;
}
