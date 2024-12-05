const tripletSum = (arr, X) => {
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let z = j + 1; z < n; z++) {
        if (arr[i] + arr[j] + arr[z] == X) {
          count++;
        }
      }
    }
  }
  return count;
};
let arr=[1,2,3,4,5,6,7]
let result = tripletSum(arr,12);
console.log(result)
function testTripletSum() {
    const testCases = [
      {
        arr: [1, 2, 3, 4, 5, 6, 7],
        X: 12,
        expected: 5, // Triplets: (1, 4, 7), (1, 5, 6), (2, 3, 7), (2, 4, 6), (3, 4, 5)
      },
      {
        arr: [1, 1, 1, 1],
        X: 3,
        expected: 4, // Triplets: (1, 1, 1) repeated 4 times with different indices
      },
      {
        arr: [3, 3, 3, 3, 3],
        X: 9,
        expected: 10, // Triplets: (3, 3, 3) repeated 10 times with different indices
      },
      {
        arr: [1, 5, 7, -1, 5],
        X: 11,
        expected: 1, // Triplet: (1, 5, 5)
      },
      {
        arr: [],
        X: 10,
        expected: 0, // No triplets in an empty array
      },
      {
        arr: [1, 2, 3, 4, 5],
        X: 15,
        expected: 0, // No triplets sum to 15
      },
      {
        arr: [0, 0, 0, 0],
        X: 0,
        expected: 4, // Triplets: (0, 0, 0) repeated 4 times
      },
    ];
  
    testCases.forEach(({ arr, X, expected }, index) => {
      const result = tripletSum(arr, X);
      console.log(
        `Test Case ${index + 1}: Input = [${arr}], X = ${X}, Expected = ${expected}, Got = ${result} -> ${
          result === expected ? "PASS" : "FAIL"
        }`
      );
    });
  }
  
  testTripletSum();