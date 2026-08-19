// Find Deepest Maximum Element
// OzonSberMail.ru
// Write a function findDeepestMaxElement(array) that processes a nested array of numbers. Conditions:

//     The array can contain numbers or nested arrays of any depth.
//     The function should return the maximum element that is at the deepest nesting level.

// Examples:
// Input 1: [10, [5, [15, [50]], 20]]
// Output 1: 50
// Input 2: [1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]]
// Output 2: 102


function findDeepestMaxElement(arr) {
  const stack = [...arr].reverse()
  const result = []

  while(stack.length){
    const el = stack.pop()
    if(Array.isArray(el)){
      for(let i = el.length - 1; i >= 0; i--){
        stack.push(el[i])
      }
    }else{
      result.push(el)
    }
  }
  return Math.max(...result)
}
