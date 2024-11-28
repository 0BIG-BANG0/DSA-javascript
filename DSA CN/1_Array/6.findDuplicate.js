function findDuplicate(arr) {
  let n = arr.length - 1;
  for (let i = 0; i <= n - 1; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]; // Return the duplicate
      }
    }
  }
  return -1; //When no number is found
}
function findDuplicateOptimised(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b); // sorts the array in ascending order

  for (let i = 0; i < n; i ++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}
function findDuplicateHAshMap(arr){
    let n = arr.length;
    let freqMap = {}//Objects to store frequency of numbers
    for(let i=0;i<n;i++){
        if(freqMap[[arr[i]]]){
            return arr[i];
        }
        freqMap[arr[i]] = true;//Mark the number as soon as as possible
    }
    return -1;
}
let arr = [0, 7, 2, 5, 4, 7, 1, 3, 6];
let result = findDuplicateHAshMap(arr);
console.log(result);

// Test Cases
function testFindDuplicate() {
  const testCases = [
    {
      input: [0, 7, 2, 5, 4, 7, 1, 3, 6],
      expected: 7,
    },
    {
      input: [1, 2, 3, 4, 5, 6],
      expected: -1, // No duplicates
    },
    {
      input: [1, 1, 2, 3, 4],
      expected: 1, // Duplicate at the beginning
    },
    {
      input: [3, 4, 5, 6, 3],
      expected: 3, // Duplicate at the end
    },
    {
      input: [2, 2, 2, 2],
      expected: 2, // All elements are duplicates
    },
    {
      input: [],
      expected: -1, // Empty array
    },
    {
      input: [0],
      expected: -1, // Single element, no duplicates
    },
  ];

  for (let { input, expected } of testCases) {
    const result = findDuplicateHAshMap(input);
    console.log(
      `Input: ${input}, Expected: ${expected}, Got: ${result}, ${
        result === expected ? "PASS" : "FAIL"
      }`
    );
  }
}

// Run the test cases
testFindDuplicate();
