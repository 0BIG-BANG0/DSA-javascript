function largestRowAndColSum(arr2d) {
  let row = arr2d.length;
  let col = arr2d[0].length;
  let colIndex = 0,
    maxColSum = -Infinity;
  let rowIndex = 0,
    maxRowSum = -Infinity;

  // Calculate column sums
  for (let i = 0; i < col; i++) {
    let sum = 0;
    for (let j = 0; j < row; j++) {
      sum += arr2d[j][i];
    }
    if (sum > maxColSum) {
      maxColSum = sum;
      colIndex = i;
    }
  }

  // Calculate row sums
  for (let i = 0; i < row; i++) {
    let sum = 0;
    for (let j = 0; j < col; j++) {
      sum += arr2d[i][j]; // ✅ Fixed: Use arr2d[i][j] instead of arr2d[j][i]
    }
    if (sum > maxRowSum) {
      // ✅ Fixed: Compare with maxRowSum
      maxRowSum = sum;
      rowIndex = i;
    }
  }

  // Return the correct result instead of printing
  if (maxRowSum >= maxColSum) {
    return `row ${rowIndex} ${maxRowSum}`;
  } else {
    return `column ${colIndex} ${maxColSum}`;
  }
}
function testLargestRowAndColSum() {
  const testCases = [
    {
      input: [
        [6, 9],
        [8, 5],
        [9, 2],
      ],
      expected: "column 0 23",
    },
    {
      input: [
        [6, 9, 8, 5],
        [9, 2, 4, 1],
        [8, 3, 9, 3],
        [8, 7, 8, 6],
      ],
      expected: "column 0 31",
    },
    {
      input: [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
      expected: "column 1 20",
    },
    {
      input: [
        [5, 1, 3],
        [8, 9, 4],
        [3, 2, 6],
      ],
      expected: "row 1 21",
    },
    {
      input: [
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
      ],
      expected: "row 0 -6",
    },
    {
      input: [[42]],
      expected: "row 0 42",
    },
  ];

  let passed = 0;
  testCases.forEach(({ input, expected }, index) => {
    let result = largestRowAndColSum(input); // ✅ Store return value
    if (result === expected) {
      console.log(`✅ Test Case ${index + 1} Passed`);
      passed++;
    } else {
      console.log(
        `❌ Test Case ${
          index + 1
        } Failed: Expected ${expected} but got ${result}`
      );
    }
  });

  console.log(`\n✅ ${passed}/${testCases.length} Test Cases Passed`);
}

// Run the test cases
testLargestRowAndColSum();
