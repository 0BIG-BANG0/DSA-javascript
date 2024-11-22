function findUnique(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      return arr[i];
    }
  }
  return -1;
}
function findUniquebetter(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i += 2) {
    if (arr[i] != arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}
function findUniqueOptimised(arr){
    let n = arr.length;
    let unique = 0;
    for(let i=0;i<n;i++){
        unique = unique ^ arr[i];
    }
    return unique;
}

let arr = [2, 4, 7, 2, 7];
let result = findUniqueOptimised(arr);
console.log(result);

// Test cases
const testCases = [
  { input: [2, 4, 7, 2, 7], expected: 4 },
  { input: [1, 2, 1, 2], expected: -1 },
  { input: [5], expected: 5 },
  { input: [10, 20, 30], expected: 10 },
  { input: [-1, -2, -3, -2, -1], expected: -3 },
  { input: [1, 2, 3, 4, 5, 1, 2, 3, 4], expected: 5 },
  { input: [6, 1, 6, 3, 4, 1], expected: 3 },
  { input: [], expected: -1 },
  { input: [1, "a", 1, 2, 2], expected: "a" },
  { input: [100, 100, 100, 1], expected: 1 },
];

// Run test cases
testCases.forEach((test, index) => {
  const result = findUnique(test.input);
  console.log(
    `Test Case ${index + 1}: Input: ${JSON.stringify(test.input)} | ` +
      `Expected: ${test.expected} | Output: ${result} | ` +
      `Pass: ${result === test.expected}`
  );
});
