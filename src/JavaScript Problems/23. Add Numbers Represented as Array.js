// Add Numbers Represented as Arrays
// YandexTinkoffAvito
// Write a function that adds two numbers represented by the arrays arr1 and arr2, then returns the sum as an array.

//     - Each element of arrays arr1 and arr2 represents one digit of the number.
//     - The result should also be represented as an array, where each element is one digit.
//     - If there are leading zeros in the result, they should be preserved.

// Examples:
// Input 1: [1, 2, 3], [4, 5, 6]
// Output 1: [5, 7, 9]
// Input 2: [5, 4, 4], [4, 5, 6]
// Output 2: [1, 0, 0, 0]



function joinArr(arr1, arr2) {

  const result = []
  let a = arr1.length - 1
  let b = arr2.length - 1 
  
  let rest = 0

  while(a >= 0 || b >= 0 || rest > 0){

    const i = a >= 0 ? arr1[a] : 0
    const j = b >= 0 ? arr2[b] : 0

    const sum = i + j + rest
    rest = Math.floor(sum / 10)
    console.log('this is i',i, 'this is j',j, 'rest',rest)

    result.push(sum % 10)

    a--
    b--
  }
  return result.reverse()

}
