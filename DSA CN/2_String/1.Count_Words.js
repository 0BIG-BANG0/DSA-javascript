function countWords(s){
    let count = 0
    for(let i=0;i<s.length;i++){
        if(s.charAt(i) === " "){
            count ++;
        }
    }
    return count+1;
}
function countWordsOptimised(s){
    let arr= s.split(' ')
    return arr.length;
}
let s = "Coding Ninjas!"
let result = countWordsOptimised(s)
console.log(result)


function testCountWords() {
    const testCases = [
        {
            input: "Coding Ninjas!", // Normal case
            expected: 2
        },
        {
            input: "Hello World, welcome to JavaScript!", // Sentence with multiple spaces
            expected: 5
        },
        {
            input: "    ", // String with only spaces
            expected: 1
        },
        {
            input: "", // Empty string
            expected: 1
        },
        {
            input: "One", // Single word
            expected: 1
        },
        {
            input: "    Leading and trailing spaces    ", // Leading and trailing spaces
            expected: 5
        },
        {
            input: "Word", // Single-word string
            expected: 1
        },
        {
            input: "This is\nmultiline\ntext", // Multiline text
            expected: 4
        },
        {
            input: "Space     between words", // Excess spaces between words
            expected: 4
        },
        {
            input: " ", // Single space
            expected: 1
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const actual = countWordsOptimised(input);
        const passed = actual === expected;
        console.log(`Test Case ${index + 1}: ${passed ? "Passed" : "Failed"}`);
        if (!passed) {
            console.log(`   Input: "${input}"`);
            console.log(`   Expected: ${expected}, Got: ${actual}`);
        }
    });
}

// Run the tests
testCountWords();
