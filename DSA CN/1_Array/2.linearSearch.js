function linearSearch(arr,x){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i;
        }
        
    }
    return -1;
}

// Test cases
const testCases = [
    { arr: [10, 20, 30, 40, 50], x: 30, expected: 2 }, // Case 1: Element is present
    { arr: [1, 2, 3, 4, 5], x: 6, expected: -1 }, // Case 2: Element not present
    { arr: [], x: 1, expected: -1 }, // Case 3: Empty array
    { arr: [5, 10, 15, 10, 20], x: 10, expected: 1 }, // Case 4: Multiple occurrences
    { arr: [42], x: 42, expected: 0 }, // Case 5: Single element array (found)
    { arr: [42], x: 100, expected: -1 }, // Case 6: Single element array (not found)
    { arr: [-5, -10, -15, -20], x: -15, expected: 2 }, // Case 7: Negative numbers
    { arr: [-5, -10, -15, -20], x: -25, expected: -1 }, // Case 8: Negative number not found
    { arr: [0, 0, 0, 0, 0], x: 0, expected: 0 }, // Case 9: All elements are the same
    { arr: [10, 20, 30, 40, 50], x: 50, expected: 4 }, // Case 10: Element is the last one
    { arr: [10, 20, 30, 40, 50], x: 10, expected: 0 }, // Case 11: Element is the first one
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x: 7, expected: 6 }, // Case 12: Mid-range test
    { arr: [1, 2, 3.5, 4, 5], x: 3.5, expected: 2 }, // Case 13: Array with floats
    { arr: ['a', 'b', 'c', 'd'], x: 'c', expected: 2 }, // Case 14: Array with characters
    { arr: ['apple', 'banana', 'cherry'], x: 'banana', expected: 1 }, // Case 15: Array with strings
    { arr: [null, undefined, 0, ''], x: 0, expected: 2 }, // Case 16: Array with mixed types
    { arr: [10, 20, 30, 40, 50], x: 60, expected: -1 }, // Case 17: Element larger than all
    { arr: [10, 20, 30, 40, 50], x: -10, expected: -1 }, // Case 18: Element smaller than all
    { arr: [1, 2, 3, 2, 1], x: 2, expected: 1 }, // Case 19: Duplicate elements (find first occurrence)
    { arr: new Array(100000).fill(1).map((_, i) => i), x: 99999, expected: 99999 }, // Case 20: Large array test
];

// Run test cases
testCases.forEach(({ arr, x, expected }, idx) => {
    const result = linearSearch(arr, x);
    console.log(`Test Case ${idx + 1}:`, result === expected ? 'Passed' : `Failed (Expected: ${expected}, Got: ${result})`);
});
