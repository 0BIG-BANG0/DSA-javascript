function rotateArray(arr, count) {
  let n = arr.length;
  let arr1 = [];
  let j = 0;
  for (let i = count; i < n; i++) {
    arr1[j] = arr[i];
    j++;
  }
  for (let i = 0; i < count; i++) {
    arr1[j] = arr[i];
    j++;
  }
  return arr1;
}
function rotateArrayOptimised(arr, count) {
  let n = arr.length;
  count = count % n;//Handling cases where count is greater than n
  return [...arr.slice(count), ...arr.slice(0, count)];
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let rotate = 2;
let result = rotateArrayOptimised(arr, rotate);
console.log(result);

function runTestCases() {
  const testCases = [
    {
      input: { arr: [1, 2, 3, 4, 5, 6, 7], count: 2 },
      expected: [3, 4, 5, 6, 7, 1, 2],
    },
    { input: { arr: [1, 2, 3, 4], count: 1 }, expected: [2, 3, 4, 1] },
    { input: { arr: [1, 2, 3, 4], count: 0 }, expected: [1, 2, 3, 4] },
    { input: { arr: [1, 2, 3, 4], count: 4 }, expected: [1, 2, 3, 4] },
    { input: { arr: [], count: 3 }, expected: [] },
    { input: { arr: [1], count: 1 }, expected: [1] },
    { input: { arr: [1, 2, 3], count: 2 }, expected: [3, 1, 2] },
    { input: { arr: [1, 2, 3], count: 5 }, expected: [3, 1, 2] }, // Handles counts > array length
  ];

  testCases.forEach((testCase, index) => {
    const { arr, count } = testCase.input;
    const expected = testCase.expected;
    const result = rotateArrayOptimised(arr, count % arr.length); // Handles rotation count larger than array length
    const passed = JSON.stringify(result) === JSON.stringify(expected);

    console.log(
      `Test Case ${index + 1}: Input = ${JSON.stringify(
        arr
      )}, Count = ${count}, ` +
        `Expected = ${JSON.stringify(expected)}, Got = ${JSON.stringify(
          result
        )} -> ` +
        (passed ? "PASS" : "FAIL")
    );
  });
}

runTestCases();
