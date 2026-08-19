// Compress Number List into Ranges
// VK
// Write a function compress(list) that converts a list of unique integers into a string, collapsing consecutive numbers into ranges.
// Examples:
// Input 1: [-10, -8, -7, -6]
// Output 1: "-10,-8--6"

// Input 2: [1, 4, 5, 2, 3, 9, 8, 11, 0]
// Output 2: "0-5,8-9,11"
// Input 3: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER + 1]
// Output 3: "-9007199254740991--9007199254740990"

function compress(list) {
  const sorted = [...list].sort((a, b) => a - b);

  if (sorted.length === 0) return "";

  let result = "";
  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];

    if (current === prev + 1) {
      prev = current;
    } else {
      // Close the current range.
      if (start === prev) {
        result += `${start},`;
      } else {
        result += `${start}-${prev},`;
      }

      // Start a new range.
      start = current;
      prev = current;
    }
  }

  // Close the final range.
  if (start === prev) {
    result += `${start}`;
  } else {
    result += `${start}-${prev}`;
  }

  return result;
}

// [ 0, 1, 2, 3, 4, 5, 8, 9, 11]

console.log(compress([-10, -8, -7, -6]));
