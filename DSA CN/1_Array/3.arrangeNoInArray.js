function arrangeArray(n) {
  let x = 0;
  let arr = [];
  //Boundary condition
  if (n == 0) {
    return arr;
  }
  if (n % 2 == 0) {
    x = n / 2 - 1;
  } else {
    x = parseInt(n / 2);
  }
  let odd = 1;
  for (let i = 0; i <= x; i++) {
    arr[i] = odd;
    odd = odd + 2;
  }
  let even = 2;
  for (let i = n - 1; i >= x + 1; i--) {
    arr[i] = even;
    even = even + 2;
  }
  return arr;
}

function arrangeArrayOptimised(n) {
  let arr = [];
  let left = 0;
  let right = n - 1;
  let odd = 1;
  let even = 2;

  while (left <= right) {
    arr[right] = even;
    even = even + 2;
    right--;
    arr[left] = odd;
    odd = odd + 2;
    left++;
  }
  return arr;
}

// Test cases
const testCases = [
    { n: 6, expected: [1, 3, 5, 6, 4, 2] },
    { n: 9, expected: [1, 3, 5, 7, 9, 8, 6, 4, 2] },
    { n: 3, expected: [1, 3, 2] },
    { n: 1, expected: [1] },
    { n: 2, expected: [1, 2] },
    { n: 7, expected: [1, 3, 5, 7, 6, 4, 2] },
    { n: 8, expected: [1, 3, 5, 7, 8, 6, 4, 2] },
];

testCases.forEach(({ n, expected }, idx) => {
    const result = arrangeArrayOptimised(n);
    console.log(
        `Test Case ${idx + 1} (n=${n}):`,
        JSON.stringify(result) === JSON.stringify(expected)
            ? "Passed"
            : `Failed (Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)})`
    );
});