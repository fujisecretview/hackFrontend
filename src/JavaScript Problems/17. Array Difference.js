// Array Difference
// Sber
// Write a function difference(arr1, arr2) that returns the elements of arr1 that do not occur in arr2. Conditions:

//     - Each array contains only numbers.
//     - Arrays can be empty.
//     - The order of elements in the returned array should match their order in arr1.

// Examples:
// Input 1: [5, 6, 7], [7, 8, 9]
// Output 1: [5, 6]
// Input 2: [1, 4, 3, 2], [1, 2]
// Output 2: [4, 3]

function difference(arr1, arr2) {

  const result = []
  const set = new Set(arr2)
  
  for(const el of arr1){
    if(!set.has(el)){
      result.push(el)
    }
  }
return result

};
