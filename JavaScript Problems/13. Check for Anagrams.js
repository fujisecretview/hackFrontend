// Check for Anagrams
// AvitoMail.ru
// Write a function isAnagram(first, second) that checks whether two strings are anagrams. Conditions:

//     The function takes two arguments:
//         - first — first string to check.
//         - second — second string to check.
//     - Two strings are anagrams if they contain the same characters with the same frequency.
//     - Strings can only contain lowercase Latin letters (a-z).

// Examples:
// Input 1: "finder", "friend"
// Output 1: true
// Input 2: "test", "sets"
// Output 2: false
// Input 3: "abc", "aaa"
// Output 3: false

function isAnagram(first, second){
  const word1 = first.split('').sort().join('')
  const word2 = second.split('').sort().join('')
  
  if(word1 === word2){
    return true
  }
  return false
}
