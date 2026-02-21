// Напишите функцию getConcated(arr), которая принимает массив объектов arr и возвращает строку, сформированную по следующим правилам:
// - Элементы должны быть упорядочены по полю order в порядке возрастания.
// - Элементы с полем expired: true должны быть исключены.
// - Поле value каждого объекта должно быть перевёрнуто (символы в обратном порядке).
// - Строка не должна содержать повторяющихся символов.
// Примеры:
// Input 1: [{ value: "aabb", order: 1, expired: false }, { value: "bbaa", order: 2, expired: false }]
// Output 1: "ba"
// Input 2: [{ value: "hello", order: 1, expired: false }, { value: "world", order: 2, expired: false }]
// Output 2: "olehdrw"


function getConcatedArr(arr) {
  // если expired - пропускаем
  // убираем дубликаты букв, разворачиваем строку и пушим в result 
  // елементы должны быть в порядке возрастания order

  // идея с сортировкой отталкиваясь от мапы?

  const values = new Map()

  for(const{value, order, expired} of arr){
    if(expired === true){
      continue;
    }
  
    values.set(order, [...value].reverse().join('')) // важно, убираем дубликаты с set
  }

  const sortedArray = Array.from(values).sort((a,b) => a[0]-b[0])
  console.log(sortedArray)
  let semiResult = ''

  sortedArray.map(e => semiResult += e[1])
  return [...new Set(semiResult)].join('')
  
}

console.log(getConcatedArr([ { value: "abcd", order: 4, expired: false }, { value: "qwer", order: 2, expired: true }, { value: "xyz1", order: 1, expired: false }, { value: "abx2", order: 3, expired: false }, ]))


// 1zyx2badc original otput
// cdab2xyz1 reversed output to check right order