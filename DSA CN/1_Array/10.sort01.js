function sort01(arr) {
  let countZero = 0;
  for (let num of arr) {
    if (arr[num] === 0) countZero++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < countZero) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  return arr;
}
function sort01Optimised(arr) {
  let indexZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      //swap the elemetn with the indexzero
      [arr[i], arr[indexZero]] = [arr[indexZero], arr[i]];
      indexZero++;
    }
  }
  return arr;
}
function sort012Pointer(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === 0) {
      left++;
    } else if (arr[right] === 1) {
      right--;
    } else {
      //swap
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr
}
let arr = [0, 1, 1, 0, 1, 0, 1];
let result = sort012Pointer(arr);
console.log(result);

function testSort01() {
  const testCases = [
    { input: [0, 1, 0, 1, 1], expected: [0, 0, 1, 1, 1] },
    { input: [1, 1, 1, 0, 0, 0], expected: [0, 0, 0, 1, 1, 1] },
    { input: [1, 1, 1, 1, 1], expected: [1, 1, 1, 1, 1] },
    { input: [0, 0, 0, 0], expected: [0, 0, 0, 0] },
    { input: [], expected: [] },
    { input: [0, 1, 1, 0, 1, 0, 1], expected: [0, 0, 0, 1, 1, 1, 1] },
    { input: [1, 0], expected: [0, 1] },
    { input: [0, 1], expected: [0, 1] },
  ];

  let allPassed = true;

  testCases.forEach((testCase, index) => {
    const result = sort012Pointer([...testCase.input]); // Clone input to avoid mutation
    const isPass = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      `Test Case ${index + 1}: Input = [${testCase.input}], Expected = [${
        testCase.expected
      }], Got = [${result}] -> ${isPass ? "PASS" : "FAIL"}`
    );
    if (!isPass) allPassed = false;
  });

  if (allPassed) {
    console.log("All test cases passed!");
  } else {
    console.log("Some test cases failed.");
  }
}

testSort01();
