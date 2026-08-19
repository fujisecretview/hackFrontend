// String Compression
// OzonSber
// Write a function compressString(str) that returns a run-length encoded version of the string. Conditions:

//     The compressed version of the string should contain the characters of the original string and the number of their consecutive repetitions.
//     If a character appears once, it is included in the string without a number.

// Examples:
// Input 1: "AAB"
// Output 1: "A2B"
// Input 2: "ABC"
// Output 2: "ABC"

function compressString(str) {
  const processed = str.split("");
  let result = "";

  // Count consecutive matching characters, then append the previous character and its count.

  let prev = processed[0];
  let counter = 1;

  for (let i = 1; i < processed.length + 1; i++) {
    const current = processed[i];

    if (current === prev) {
      counter++;
    }

    if (current !== prev) {
      if (counter === 1) {
        result += `${prev}`;
      } else {
        result += `${prev}${counter}`;
        counter = 1;
      }
    }
    prev = current;
  }
  return result;
}
