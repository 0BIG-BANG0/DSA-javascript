//simple technique would be to take a variable and store the reverse and compare

function palindromeOptimed(str) {
  //2 pointer approach
  let s = 0;
  let e = str.length - 1;
  while (s < e) {
    if (str.charAt(s) === str.charAt(e)) {
      s++;
      e--;
    } else {
      return false;
    }
  }
  return true;
}
let str = "abcdcbaa";
let res = palindromeOptimed(str);
console.log(res);

function testPalindromeOptimed() {
    const testCases = [
      { input: "abcdcba", expected: true }, // Standard palindrome
      { input: "abcddcba", expected: true }, // Even-length palindrome
      { input: "abccba", expected: true }, // Palindrome with even number of characters
      { input: "abcd", expected: false }, // Non-palindrome
      { input: "a", expected: true }, // Single character (always palindrome)
      { input: "", expected: true }, // Empty string (considered a palindrome)
      { input: "ab", expected: false }, // Two different characters
      { input: "Aba", expected: false }, // Case-sensitive test (not a palindrome)
      { input: "aabbaa", expected: true }, // Complex palindrome
      { input: "12321", expected: true }, // Numeric palindrome
    ];
  
    let allPassed = true;
  
    testCases.forEach(({ input, expected }, index) => {
      const result = palindromeOptimed(input);
      const passed = result === expected;
      console.log(
        `Test Case ${index + 1}:`,
        passed ? "PASS" : "FAIL",
        `\nInput: "${input}"`,
        `\nExpected: ${expected}, Got: ${result}\n`
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
  testPalindromeOptimed();
  