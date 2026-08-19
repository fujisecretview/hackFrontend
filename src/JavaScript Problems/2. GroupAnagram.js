// Group Anagrams
// VKTinkoffMail.ru
// Write a function groupAnagrams(arr) that groups anagrams from an array of strings. Conditions:

//     An anagram is a word or phrase formed by rearranging the letters of another word or phrase (e.g., "tea" => "eat").

// Examples:
// Input 1: ["ab", "ba", "abc", "bca"]
// Output 1: [["abc","bca"],["ab","ba"]]
// Input 2: ["listen", "silent", "enlist"]
// Output 2: [["listen","silent","enlist"]]



const arr = ['ab','ba', 'abc', 'cba']

// Use each word's sorted characters as a canonical key for grouping anagrams.

function groupAnagrams(arr) {
  const map = new Map
  
  for(let word of arr){
    const key = word.split('').sort().join() // The sorted string serves as the key.

    if(!map.has(key)){
      map.set(key, [])
    } // Create a group when the key is encountered for the first time.

    map.get(key).push(word) // Add the word to its anagram group.
  }
  return Array.from(map.values()) // Return the grouped anagrams as an array.
}

console.log(groupAnagrams(arr))
