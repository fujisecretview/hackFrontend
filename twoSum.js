// Необходимо; написать; функцию; twoSum(nums, target), которая; принимает; массив; чисел; nums; и; число; target.Функция; должна; возвращать; массив; с; двумя; индексами; элементов, сумма; которых; равна; target.Гарантируется, что; всегда; существует; ровно; одно; решение.

//   Input 2: [2, 7, 11, 5, 9, 10, 15], 9
// Output 2: [0, 1]

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const complement = target - value;

    if(map.has(complement)){
      return [map.get(complement), i]
    }
    map.set(value, i)
  }
}

console.log(twoSum([2, 7, 11, 5, 9, 10, 15], 9));
