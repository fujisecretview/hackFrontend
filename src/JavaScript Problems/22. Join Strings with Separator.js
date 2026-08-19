// Join Strings with Separator
// Sber
// Write a function strjoin(separator, ...strings) that joins strings with the given separator.
// Return an empty string when no strings are provided.
// Examples:
// Input 1: ' ', 'Hello', 'World'
// Output 1: 'Hello World'
// Input 2: '-', 'a', 'b', 'c', 'd'
// Output 2: 'a-b-c-d'
// Input 3: ':', 'one', 'two'
// Output 3: 'one:two'
// Input 4: '/', '2023', '01', '01'
// Output 4: '2023/01/01'

function strjoin(separator, ...strings) {
  const result = strings.map(e => e + separator).join('').split('').slice(0,-1).join('')
  return result;
}
