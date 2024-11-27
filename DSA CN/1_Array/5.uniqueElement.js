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
function findUniqueOptimisedXOR(arr) {
  let n = arr.length;
  let unique = 0;
  for (let i = 0; i < n; i++) {
    unique = unique ^ arr[i];
  }
  return unique;
}
function findUniqueOptimisedHashMAp(arr) {
  let frequencyMap = {}; //create a hashMap
  //Populate the HashMAp with the frequencies
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (frequencyMap[num] !== undefined) {
      frequencyMap[num] += 1; //increement the count if the number exist
    } else {
      frequencyMap[num] = 1; // Initilize the count if the number don't exist
    }
  }
  //Find the unique Element using a second Loop
  let keys = Object.keys(frequencyMap);

  for (let i = 0; i < keys.length; i++) {
    if (frequencyMap[keys[i]] === 1) {
      return parseInt(keys[i]); //return the unique Element
    }
  }
  return -1;//return -1 when no unique Element is found.
}
let arr = [2, 4, 7, 2, 7];
let result = findUniqueOptimisedHashMAp(arr);
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
