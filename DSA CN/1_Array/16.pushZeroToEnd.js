function pushZeroToEnd(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] === 0) {
        //swap it with teh adjacent Element
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
function pushZeroToEndOptimized(arr) {
  let n = arr.length;
  let nonZeroIndex = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      //swap current non-zero Element with the elemt at non zeroIndex
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
}
let arr = [2, 0, 0, 1, 3, 0, 0];
let result = pushZeroToEndOptimized(arr);
console.log(result);

function runTestCases() {
  const testCases = [
    { input: [2, 0, 0, 1, 3, 0, 0], expected: [2, 1, 3, 0, 0, 0, 0] },
    { input: [0, 0, 0, 0], expected: [0, 0, 0, 0] },
    { input: [1, 2, 3, 4], expected: [1, 2, 3, 4] },
    { input: [0, 1, 0, 2, 0, 3, 0, 4], expected: [1, 2, 3, 4, 0, 0, 0, 0] },
    { input: [], expected: [] },
    { input: [0], expected: [0] },
    { input: [1], expected: [1] },
    { input: [0, 0, 1, 0, 0], expected: [1, 0, 0, 0, 0] },
  ];

  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;
    const result = pushZeroToEndOptimized([...input]); // Clone input to avoid modifying the original
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(
      `Test Case ${index + 1}: Input = ${JSON.stringify(input)}, ` +
        `Expected = ${JSON.stringify(expected)}, Got = ${JSON.stringify(
          result
        )} -> ` +
        (passed ? "PASS" : "FAIL")
    );
  });
}

runTestCases();
