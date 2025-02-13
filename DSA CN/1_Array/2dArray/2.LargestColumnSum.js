function largestColSum(arr2d) {
  let n = arr2d.length;
  let m = arr2d[0].length;
  let maxSum = -Infinity;
  //Here i is for col and j is for row
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr2d[j][i];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum
}
let arr2d = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
let res = largestColSum(arr2d);
console.log(res);
function testLargestColSum() {
    let testCases = [
      {
        arr2d: [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
        ],
        expected: 20, // Column sums: [16, 20]
      },
      {
        arr2d: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        expected: 18, // Column sums: [12, 15, 18]
      },
      {
        arr2d: [
          [10, 20],
          [30, 40],
          [50, 60],
        ],
        expected: 120, // Column sums: [90, 120]
      },
      {
        arr2d: [
          [-1, -2, -3],
          [-4, -5, 6],
          [-7, -8, -9],
        ],
        expected: -6, // Column sums: [-12, -15, -6] (Max is -6)
      },
      {
        arr2d: [
          [10, 20, 30, 40],
        ],
        expected: 40, // Single-row case, max is 40
      },
      {
        arr2d: [
          [5],
          [10],
          [15],
          [20],
        ],
        expected: 50, // Single-column case, sum is 50
      },
    ];
  
    let allPassed = true;
    for (let i = 0; i < testCases.length; i++) {
      let { arr2d, expected } = testCases[i];
      let result = largestColSum(arr2d);
      if (result === expected) {
        console.log(`✅ Test Case ${i + 1} Passed`);
      } else {
        console.log(`❌ Test Case ${i + 1} Failed | Expected: ${expected}, Got: ${result}`);
        allPassed = false;
      }
    }
  
    if (allPassed) {
      console.log("🎉 All test cases passed!");
    }
  }
  
  // Run test cases
  testLargestColSum();
  