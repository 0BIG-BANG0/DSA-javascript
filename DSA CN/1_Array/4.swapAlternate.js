function swapAlternate(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n; i = i + 2) {
    for (let j = i + 1; j <= i + 1; j = j + 2) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
function swapAlternateOptimised(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n - 1; i += 2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
let arr = [9, 3, 6, 12, 4, 32];
swapAlternateOptimised(arr);
console.log(arr);
