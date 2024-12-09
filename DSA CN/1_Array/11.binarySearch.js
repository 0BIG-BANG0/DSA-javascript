function binarySearch(arr, X) {
  arr.sort((a, b) => a - b);
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let m = parseInt((s + e) / 2);
    if (arr[m] === X) {
      return m;
    } else if (arr[m] < X) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
  return -1
}
let arr = [1,2,3,4,7,20,33]
let result = binarySearch(arr,33)
console.log(result)

function testBinarySearch() {
    const testCases = [
      { arr: [1, 2, 3, 4, 7, 20, 33], X: 33, expected: 6 },
      { arr: [5, 1, 10, 3, 8], X: 10, expected: 4 },
      { arr: [5, 1, 10, 3, 8], X: 2, expected: -1 },
      { arr: [], X: 1, expected: -1 },
      { arr: [1], X: 1, expected: 0 },
      { arr: [1, 1, 1, 1], X: 1, expected: 0 },
      { arr: [10, 20, 30, 40, 50], X: 40, expected: 3 },
      { arr: [-10, -5, 0, 5, 10], X: 0, expected: 2 },
    ];
  
    testCases.forEach(({ arr, X, expected }, index) => {
      const result = binarySearch(arr, X);
      const pass = result === expected;
      console.log(
        `Test Case ${index + 1}: Input = ${JSON.stringify(arr)}, X = ${X}, ` +
        `Expected = ${expected}, Got = ${result} -> ${pass ? "PASS" : "FAIL"}`
      );
    });
  }
  
  // Run test cases
  testBinarySearch();
  