// Найти самый глубокий максимальный элемент
// ОзонСберMail.ru
// Напишите функцию findDeepestMaxElement(array), которая принимает вложенный массив чисел array. Условия:

//     Массив может содержать числа или вложенные массивы любой глубины.
//     Функция должна вернуть максимальный элемент, который находится на самой глубокой вложенности.


// Input 2: [1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]]
// Output 2: 102

function getDepthEl(arr, depth=0){
  let max = depth;// начальное значение
 

  for(const el of arr){
    if(Array.isArray(el)){
     const d = getDepthEl(el, depth + 1)
      if(d > max){
        max = d
        
      }
    }
  }
 return max
}

console.log(getDepthEl([1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]]))