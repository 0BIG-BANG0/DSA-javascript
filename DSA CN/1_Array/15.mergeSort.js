function mergeSort(arr1, arr2) {
  let i = 0;
  let j = 0;
  let z = 0;
  let arr3 =[]

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3[z] = arr1[i];
      z++;
      i++;
    } else {
      arr3[z] = arr2[j];
      z++;
      j++;
    }
  }
  while(i<arr1.length){
    arr3[z]=arr1[i]
    z++
    i++
  }
  while(j<arr2.length){
    arr3[z]=arr2[j]
    z++
    j++
  }
  return arr3
}
let arr1 = [1,2,4,6,8]
let arr2 = [3,5,7,9]
let result = mergeSort(arr1,arr2)
console.log(result)

// Test case function for mergeSort
function testMergeSort() {
    const testCases = [
      { arr1: [1, 2, 4, 6, 8], arr2: [3, 5, 7, 9], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { arr1: [], arr2: [1, 2, 3], expected: [1, 2, 3] },
      { arr1: [1, 2, 3], arr2: [], expected: [1, 2, 3] },
      { arr1: [], arr2: [], expected: [] },
      { arr1: [1], arr2: [2], expected: [1, 2] },
      { arr1: [1, 2], arr2: [3, 4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
      { arr1: [1, 3, 5], arr2: [1, 3, 5], expected: [1, 1, 3, 3, 5, 5] },
    ];
  
    let allPassed = true;
  
    testCases.forEach(({ arr1, arr2, expected }, index) => {
      const result = mergeSort(arr1, arr2);
      const passed = JSON.stringify(result) === JSON.stringify(expected);
      console.log(
        `Test Case ${index + 1}: `,
        passed ? "PASS" : "FAIL",
        `\nInput arr1: ${JSON.stringify(arr1)}, arr2: ${JSON.stringify(arr2)}`,
        `\nExpected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}\n`
      );
      if (!passed) allPassed = false;
    });
  
    if (allPassed) {
      console.log("All test cases passed!");
    } else {
      console.log("Some test cases failed.");
    }
  }
  // Run the test cases
testMergeSort();