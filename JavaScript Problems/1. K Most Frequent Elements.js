// Write a function that takes an array of integers and an integer k, then returns the k most frequent elements. Conditions:
// - If k is greater than the number of unique elements in the array, return all unique elements.


function moreFreqElement(arr, target){
  const map = new Map

  for(const el of arr){
    let quantity = map.get(el) || 1
    map.set(el, quantity + 1) // Store the updated frequency.
  } // The map associates each element with its frequency.

  const sorted = [...map].sort((a,b) => b[1] - a[1])
  return sorted.slice(0, target).map(el => el[0])

  // No additional target check is needed: slice returns all unique elements when target exceeds their count.
}

console.log(moreFreqElement([1, 1, 1, 2, 2, 3,3,3,3,5], 4))
