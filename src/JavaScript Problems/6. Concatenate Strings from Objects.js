// Write a function getConcated(arr) that builds a string according to these rules:
// - Sort the items by the order field in ascending order.
// - Exclude items whose expired field is true.
// - Reverse the characters in each item's value field.
// - Do not include duplicate characters in the resulting string.
// Examples:
// Input 1: [{ value: "aabb", order: 1, expired: false }, { value: "bbaa", order: 2, expired: false }]
// Output 1: "ba"
// Input 2: [{ value: "hello", order: 1, expired: false }, { value: "world", order: 2, expired: false }]
// Output 2: "olehdrw"


function getConcated(arr){
  const seen = new Set() // Track characters that have already been added.
  let result = ''

  const sorted = arr.filter(item => !item.expired).sort((a,b) => a.order-b.order) 
  console.log(sorted)

  for(const {value} of sorted){
    const reversed = [...value].reverse()

    for(const char of reversed){
      if(!seen.has(char)){
        seen.add(char)
        result += char
      }
    }
  }
  return result
}


console.log(getConcated([{ value: "abcd", order: 4, expired: false }, { value: "qwer", order: 2, expired: true }, { value: "xyz1", order: 1, expired: false }, { value: "abx2", order: 3, expired: false }, ]))
