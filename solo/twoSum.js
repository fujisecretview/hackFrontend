// Необходимо; написать; функцию; twoSum(nums, target), которая; принимает; массив; чисел; nums; и; число; target.Функция; должна; возвращать; массив; с; двумя; индексами; элементов, сумма; которых; равна; target.Гарантируется, что; всегда; существует; ровно; одно; решение.

//   Input 2: [2, 7, 11, 5, 9, 10, 15], 9
// Output 2: [0, 1]

function twoSum(nums, target) {
  let arr = [...nums].sort((a,b) => a - b)
  

  let left = 0;
  let right = arr.length - 1;

  while (left < right) { 
    if (arr[left] + arr[right] === target) {
      return [nums.indexOf(arr[left]), nums.indexOf(arr[right])]; // ошибка в сортировке
    }

    if (arr[left] + arr[right] > target) {
      right--;
    }else{
      left++;
    }
  }
}

console.log(twoSum([3, 3], 6))

