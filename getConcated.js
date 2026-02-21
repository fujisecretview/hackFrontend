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


function getConcated(arr){
  const seen = new Set() // для элементов которые мы уже видели
  let result = ''

  const sorted = arr.filter(item => !item.expired).sort((a,b) => a.order-b.order) 
  console.log(sorted)

  for(const {value} of sorted){
    const reversed = [...value].reverse()

    for(const char of reversed){
      if(!seen.has(char)){
        seen.add(char)
        result += char
      }
    }
  }
  return result
}


console.log(getConcated([{ value: "abcd", order: 4, expired: false }, { value: "qwer", order: 2, expired: true }, { value: "xyz1", order: 1, expired: false }, { value: "abx2", order: 3, expired: false }, ]))