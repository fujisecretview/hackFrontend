// Recursive Sum of All Numbers in Object
// VKTinkoffAvito
// Write a function that recursively calculates the sum of all numeric values in an object.

//     If the object contains nested objects, you need to recursively traverse them.
//     If there are non-numeric values inside the object, ignore them.

// Examples:
// Input 1: { x: 5, y: { z: 7, w: { v: -3, }, }, }
// Output 1: 9
// Input 2: { a: "text", b: { c: true, d: null, e: 5, }, }
// Output 2: 5

function recursiveSum(obj) {
  let acc = 0

  for(const value in obj){
    const current = obj[value]

    if(typeof current === 'number') acc += current
    if(current && typeof current === 'object'){
      acc += recursiveSum(current)
    }
  }
  return acc
};
