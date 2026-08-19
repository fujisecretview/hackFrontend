// Find Indices of Elements for Sum
// Avito
// Write a function twoSum(nums, target) that returns the indices of the two elements whose sum equals target.
// Exactly one solution is guaranteed.
// Examples:
// Input 1: [3, 3], 6
// Output 1: [0, 1]
// Input 2: [2, 7, 11, 5, 9, 10, 15], 9
// Output 2: [0, 1]


function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const searched = target - value;

    if(map.has(searched)){
      return [map.get(searched), i]
    }
    map.set(value, i)
  }
}






