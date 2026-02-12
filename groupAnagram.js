const arr = ['ab','ba', 'abc', 'cba']

// для каждого слова можно через for of заполнить мап в его форме через итератор
// но осноная проблема в том что сравниват все равно тяжело по этому мо

function groupAnagrams(arr) {
  const map = new Map
  
  for(let word of arr){
    const key = word.split('').sort().join() // ключем выступает отсортированая строка

    if(!map.has(key)){
      map.set(key, [])
    } // если в мапе нету ключа то я этот ключ создаю

    map.get(key).push(word) // если у нас значение совпало на анаграму то запуш значение по ключу
  }
  return Array.from(map.values()) // возвращаем массив из анаграм
}

console.log(groupAnagrams(arr))

