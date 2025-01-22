function allSubstring(s) {
  for (let i = 1; i <= s.length; i++) {
    let ans = "";
    for (let j = i - 1; j < s.length; j++) {
      ans += s.charAt(j);
      console.log(ans);
    }
  }
}
function allSubstring2(s) {
    for (let i = 0; i < s.length; i++) { // Start of substring
      for (let j = i + 1; j <= s.length; j++) { // End of substring (exclusive)
        console.log(s.substring(i, j));
      }
    }
  }
  

let s = "abc";
allSubstring2(s);
