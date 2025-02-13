function findUnion(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while(i<arr1.length){
    res.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    res.push(arr2[j])
    j++
  }
  return res;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 6, 8, 10];
const result = findUnion(arr1, arr2);
console.log(result);
