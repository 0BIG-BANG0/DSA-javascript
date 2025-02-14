function sumBoundariesDiagonals(arr2d) {
    let n = arr2d.length;
    let sum = 0;
  
    // Sum of first and last row
    for (let j = 0; j < n; j++) {
      sum += arr2d[0][j] + arr2d[n - 1][j];
    }
  
    // Sum of first and last column (excluding corners to avoid double count)
    for (let i = 1; i < n - 1; i++) {
      sum += arr2d[i][0] + arr2d[i][n - 1];
    }
  
    // Sum of primary diagonal (excluding first and last row to avoid double count)
    for (let i = 1; i < n - 1; i++) {
      sum += arr2d[i][i];
    }
  
    // Sum of secondary diagonal (excluding first and last row and avoiding center double count)
    for (let i = 1; i < n - 1; i++) {
      sum += arr2d[i][n - 1 - i];
    }
  
    // Subtract middle element (if odd N, since it's counted twice)
    if (n % 2 !== 0) {
      sum -= arr2d[Math.floor(n / 2)][Math.floor(n / 2)];
    }
  
    return sum;
  }
  
  // Example 5x5 Matrix (All 1s)
  let matrix = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];
  
  let res = sumBoundariesDiagonals(matrix);
  console.log(res); // Expected Output: 24
//   function testSumBoundariesDiagonals() {
//     const testCases = [
//         { 
//             input: [
//                 [1, 1, 1, 1, 1],
//                 [1, 1, 1, 1, 1],
//                 [1, 1, 1, 1, 1],
//                 [1, 1, 1, 1, 1],
//                 [1, 1, 1, 1, 1]
//             ], 
//             expected: 24 
//         },
//         { 
//             input: [
//                 [2, 2, 2, 2],
//                 [2, 2, 2, 2],
//                 [2, 2, 2, 2],
//                 [2, 2, 2, 2]
//             ], 
//             expected: 28 
//         },
//         { 
//             input: [
//                 [3, 3, 3],
//                 [3, 3, 3],
//                 [3, 3, 3]
//             ], 
//             expected: 20 
//         },
//         { 
//             input: [
//                 [5]
//             ], 
//             expected: 5 
//         },
//         { 
//             input: [
//                 [1, 2, 3, 4, 5],
//                 [6, 7, 8, 9, 10],
//                 [11, 12, 13, 14, 15],
//                 [16, 17, 18, 19, 20],
//                 [21, 22, 23, 24, 25]
//             ], 
//             expected: 140 
//         }
//     ];

//     let passed = 0;
//     testCases.forEach(({ input, expected }, index) => {
//         let result = sumBoundariesDiagonals(input);
//         if (result === expected) {
//             console.log(`✅ Test Case ${index + 1} Passed`);
//             passed++;
//         } else {
//             console.log(`❌ Test Case ${index + 1} Failed: Expected ${expected} but got ${result}`);
//         }
//     });

//     console.log(`\n✅ ${passed}/${testCases.length} Test Cases Passed`);
// }

// // Run the test cases
// testSumBoundariesDiagonals();
