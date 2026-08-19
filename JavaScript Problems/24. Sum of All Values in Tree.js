// Sum of All Values in Tree
// YandexOzon
// Write a function getTreeVal(obj) that returns the sum of every value field in a tree. Conditions:

//     The object has the following structure:
//         - value: number
//         - children: array of child nodes, each having the same structure
//     - If child nodes are absent, the node contains only the value field.

// Examples:
// Input 1: { value: 10, children: [] }
// Output 1: 10
// Input 2: { value: 0, children: [ { value: 0, children: [] } ] }
// Output 2: 0
// Input 3: { value: -5, children: [ { value: -10, children: [ { value: -15 } ] } ] }
// Output 3: -30


function getTreeVal(obj) {
  let sum = obj.value
  
  if(!obj.children) return sum 

  for(child of obj.children) {
    sum += getTreeVal(child)
  }
  return sum
};
