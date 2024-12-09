function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = arr[i]
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    //swap the min element with the ith Element
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
let arr = [1,2,3,0,6]
let result = selectionSort(arr);
console.log(result)
