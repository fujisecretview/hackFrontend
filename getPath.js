//  Напишите функцию get(obj, path), которая принимает объект obj и строку path, представляющую путь к значению в объекте.

//     - Если путь существует, функция должна возвращать соответствующее значение.
//     - Если путь не существует, функция должна возвращать undefined.
//     - Путь передается в виде строки, разделенной точками (.).

// Примеры:
// Input 1: { a: { b: { c: "d" } } }, "a.b.c"
// Output 1: "d"
// Input 2: { a: { b: { c: "d" } } }, "a.b"
// Output 2: { c: "d" }
// Input 3: { x: { y: { z: 42 } } }, "x.y.a"
// Output 3: undefined


function getPath(obj, path){
  const keys = path.split('.') // делаю цепочку ключей
  let current = obj // чтобы не дергать основной обьект

  for (const key of keys){
    if (current === null) return undefined
    current = current[key]
  }

  return current
}



console.log(getPath({ a: { b: { c: "d" } } }, "a.b.c"))