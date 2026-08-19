// Write a function findSubstring(substring, arr) that returns the strings containing the given substring.

// - The substring may appear anywhere in a string.
// - Matching is case-sensitive.
// - Return an empty array if no string contains the substring.

// Examples:
// Input 1: "oo", ["food", "door", "moon"]
// Output 1: ["food", "door", "moon"]
// Input 2: "xyz", ["apple", "banana", "cherry"]
// Output 2: []


function substringSearch(substring,string){
  return string.filter((word) => word.includes(substring))
}


console.log(substringSearch("xyz", ["apple", "banana", "cherry"]))
