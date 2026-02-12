// Write a function that takes an array of integers nums and an integer k, and returns an array of the k most frequently occurring elements. Conditions:
// - If k is greater than the number of unique elements in the array, return all unique elements.


function moreFreqElement(arr, target){
  const map = new Map

  for(const el of arr){
    let quantity = map.get(el) || 1
    map.set(el, quantity + 1) // или записать напрямую quantity
  } // в этом цикле мы заполняем мапу и по значениям видим самые частые елементы

  const sorted = [...map].sort((a,b) => b[1] - a[1])
  return sorted.slice(0, target).map(el => el[0])

  // проверка на таргет не делается так как в условии хочет вывести все уникальные елементы неважно в каком порядке. Так что писать доп проверки не нужно
}

console.log(moreFreqElement([1, 1, 1, 2, 2, 3,3,3,3,5], 4))