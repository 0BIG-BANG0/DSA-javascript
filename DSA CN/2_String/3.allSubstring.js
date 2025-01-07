function allSubstring(s) {
  for (let i = 1; i <= s.length; i++) {
    let ans = "";
    for (let j = i - 1; j < s.length; j++) {
        ans += s.charAt(j) 
        console.log(ans)
    }
  }
}

let s = "abc";
allSubstring(s);
