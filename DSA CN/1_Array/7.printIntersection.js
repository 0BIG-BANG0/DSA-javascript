function printIntersection(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
}
function printIntersection2Pointrs(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log(result);
}
function printIntersectionOptimised(arr1, arr2) {
  const freqMap = {};
  const result = [];
  //Build a ffrequency map for arr1
  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];
    if (freqMap[num] === undefined) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }
  }
  //check intersection in arr2 using 
  for(let i=0;i<arr2.length;i++){
    const num = arr2[i]
    if(freqMap[num]>0){
        result.push(num)
        freqMap[num]--;//Aoid duplicate
    }
  }
  console.log(result)
}
let arr1 = [2, 6, 8, 5, 4, 3];
let arr2 = [2, 3, 4, 7];
printIntersectionOptimised(arr1, arr2);
