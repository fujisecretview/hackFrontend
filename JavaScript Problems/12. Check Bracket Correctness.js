// Write a function checkBrackets(str) that validates bracket placement in a string.

// The string may contain three types of brackets: parentheses (), braces {}, and square brackets [].
// Return true if every bracket is closed and nested correctly; otherwise, return false.

// Input 1: "{Hi(good day)!}"
// Output 1: true
// Input 2: "{nice[day}"
// Output 2: false

function isBrackets(str) {
  // Remove every character except brackets.
  const processed = str.replace(/[^()[\]{}]/g, "");
  // Use a stack to track unmatched opening brackets.

  console.log(processed)

  if (!processed.length % 2 !== 0) return false
  const stack = []; // The stack stores opening brackets.

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  }; // Map each closing bracket to its matching opening bracket.
  

  for (const char of processed) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char); // Push only opening brackets onto the stack.
    } else {
      if (stack.length === 0) return false // A closing bracket has no matching opening bracket.
      const last = stack.pop(); // Remove the most recent opening bracket.
      if(last !== pairs[char]){ // Return false when the bracket types do not match.
        return false
      }
    }
  }
   return stack.length === 0 // Any remaining opening brackets make the string invalid.
}

console.log(isBrackets("{Hi(good day)!}"))
