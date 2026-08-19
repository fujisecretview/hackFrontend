// Write a function capitalize(input) that returns a copy of the input with every word capitalized.
// - A "word" is a sequence of Unicode characters in the Letter category.
// - Hyphenated terms (for example, "something-like-this") count as one word.


function capitalized(input){
  return input.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
}

console.log(capitalized('some-thing happened'))

// toUpperCase returns an uppercase copy of the character; another approach is to use replace with a regular expression.
