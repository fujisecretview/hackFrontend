// Write a function get(obj, path) that retrieves a value from an object using a path string.

// - Return the corresponding value if the path exists.
// - Return undefined if the path does not exist.
// - Path segments are separated by dots (.).

// Examples:
// Input 1: { a: { b: { c: "d" } } }, "a.b.c"
// Output 1: "d"
// Input 2: { a: { b: { c: "d" } } }, "a.b"
// Output 2: { c: "d" }
// Input 3: { x: { y: { z: 42 } } }, "x.y.a"
// Output 3: undefined


function getPath(obj, path){
  const keys = path.split('.') // Split the path into a sequence of keys.
  let current = obj // Traverse without modifying the original object reference.

  for (const key of keys){
    if (current === null) return undefined
    current = current[key]
  }

  return current
}



console.log(getPath({ a: { b: { c: "d" } } }, "a.b.c"))
