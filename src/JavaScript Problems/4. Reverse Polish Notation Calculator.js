// Write a function calc(str) that evaluates a Reverse Polish Notation (RPN) expression:
// - Operands (numbers) and operators (+, -, *, /) are separated by spaces.
// - Each operator is applied to the two most recent operands.
// - The expression is evaluated from left to right.
// If the input is invalid, return an appropriate error message:
// "Error in Syntax" for invalid expression syntax.
// "Error in Operands" for a non-numeric operand.
// "Division by zero" when an expression attempts to divide by zero.
// Examples:
// Input 1: "8 2 / 3 +"
// Output 1: 7
// Input 2: "
// * -"
// Output 2: 1

// Scan the tokens from left to right, storing operands on a stack until an operator is encountered.

function calc(str) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
      if (b === 0) {
        return "division by Zero";
      }
      return a / b;
    },
  };

  const tokens = str.trim().split(/\s+/);
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];

    if (!isNaN(tokens[i])) {
      stack.push(Number(current));
      continue; // Continue with the next token.
    }

    const res = operations[current]

    if (res) {
      if (stack.length < 2) {
        return "Error, check syntax";
      }

      const b = stack.pop();
      const a = stack.pop();

      if(res === "division by Zero") return "Division by zero";

      stack.push(res(a, b));

      continue;
    }
  }
  if(stack.length !== 1) return "Error in Syntax";
  return stack[0];
}

console.log(calc("8 2 / 3 +"));
