function getSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    function findLargestAndSecondLargest(array) {
        for (let element of array) {
            if (Array.isArray(element)) {
                // Recursive call for nested arrays
                findLargestAndSecondLargest(element);
            } else {
                // Compare with largest and second largest
                if (element > largest) {
                    secondLargest = largest;
                    largest = element;
                } else if (element > secondLargest && element < largest) {
                    secondLargest = element;
                }
            }
        }
    }

    // Start processing the input array
    findLargestAndSecondLargest(arr);

    // Return the result
    return secondLargest === -Infinity ? -1 : secondLargest;
}
function testGetSecondLargest() {
    const testCases = [
        { input: [1, 2, 3, 4, 5], expected: 4 },
        { input: [1, [2, 3], [4, [5, 6]]], expected: 5 },
        { input: [1, 2, 2, 3, 3, 4, 4], expected: 3 },
        { input: [10], expected: -1 },
        { input: [7, 7, 7, 7], expected: -1 },
        { input: [-1, -2, -3, -4, -5], expected: -2 },
        { input: [-10, -20, 10, 20, 15], expected: 15 },
        { input: [1, "a", [2, null, [3, "b", [4]]]], expected: 3 },
        { input: [], expected: -1 },
        { input: [[1, [2, [3, [4, [5, [6]]]]]]], expected: 5 },
        { input: [1000, [2000, 3000], [4000, [5000, 6000]]], expected: 5000 },
        { input: [0, [0, [0, [0, 1]]]], expected: 0 },
        { input: [Infinity, [1, 2, -Infinity, [3]]], expected: 3 }
    ];

    let passed = 0;
    let failed = 0;

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = getSecondLargest(input);

        if (result === expected) {
            console.log(`Test Case ${i + 1}: Passed`);
            passed++;
        } else {
            console.log(`Test Case ${i + 1}: Failed`);
            console.log(`   Input: ${JSON.stringify(input)}`);
            console.log(`   Expected: ${expected}`);
            console.log(`   Got: ${result}`);
            failed++;
        }
    }

    console.log(`\nTotal Passed: ${passed}`);
    console.log(`Total Failed: ${failed}`);
}

// Run the tests
testGetSecondLargest();
