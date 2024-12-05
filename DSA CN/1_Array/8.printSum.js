function printSum(arr, X) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == X) {
        count++;
      }
    }
  }
  return count;
}
function printSumOptimised(arr, X) {
  let n = arr.length;
  let freqMap = {};
  let count =0

  for (let num of arr) {
    let complement = X - num;
    //if complement is in the pair we found the pair
    if (freqMap[complement]) {
      count += freqMap[complement];
    }
    //Update the freqMap and increse the freq of the number we gone through
    freqMap[num] = (freqMap[num] || 0) + 1;
  }
  return count;
}
// let arr = [1, 3, 6, 2, 5, 4, 3, 2, 4];
// let X = 7;
// let result = printSum(arr, X);
// console.log(result);

function testPrintSum() {
  const testCases = [
    {
      arr: [1, 3, 6, 2, 5, 4, 3, 2, 4],
      X: 7,
      expected: 7, // Pairs: (1, 6), (3, 4), (3, 4), (6, 1), (2, 5), (5, 2), (4, 3)
    },
    {
      arr: [1, 5, 7, -1, 5],
      X: 6,
      expected: 3, // Pairs: (1, 5), (7, -1), (5, 1)
    },
    {
      arr: [1, 1, 1, 1],
      X: 2,
      expected: 6, // All pairs: (1, 1) 6 times
    },
    {
      arr: [],
      X: 10,
      expected: 0, // No pairs in an empty array
    },
    {
      arr: [1, 2, 3, 4, 5],
      X: 10,
      expected: 0, // No pairs sum to 10
    },
    {
      arr: [0, 0, 0, 0],
      X: 0,
      expected: 6, // Pairs: (0, 0) 6 times
    },
    {
      arr: [1, -1, 2, -2, 3, -3],
      X: 0,
      expected: 3, // Pairs: (1, -1), (2, -2), (3, -3)
    },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { arr, X, expected } = testCases[i];

    // Brute force
    const bruteResult = printSumOptimised(arr, X);
    console.log(
      `Test ${
        i + 1
      } (Brute): Input = [${arr}], X = ${X}, Expected = ${expected}, Got = ${bruteResult} -> ${
        bruteResult === expected ? "PASS" : "FAIL"
      }`
    );
  }
}

testPrintSum();
