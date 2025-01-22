function findInter(arr1, arr2) {
//   let n = Math.min(arr1.length, arr2.length);
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 6];
const result = findInter(arr1, arr2);
console.log(result);
