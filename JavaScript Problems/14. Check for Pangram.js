// Check for Pangram
// Yandex
// Write a function isPangram(sentence) that checks whether a string is a pangram.

//     - A pangram is a string that contains every letter of the alphabet at least once.
//     - The string can contain non-letter characters, which should be ignored.

// Examples:
// Input 1: "the"
// Output 1: false
// Input 2: "TheQuickBrownFoxJumpsOverTheLazyDog"
// Output 2: true


const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function isPangram(sentence) {
  const arr = sentence.toUpperCase().split('').sort()
  const set = new Set(arr)

  for(const letter of LETTERS){
    console.log(set)
    if (!set.has(letter)){
      console.log(letter)
      return false
    }
  }
  return true
};


console.log(isPangram('heQuickBrownFoxJumpsOverTheLazyDog'))
