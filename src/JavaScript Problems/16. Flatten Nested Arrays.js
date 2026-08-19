// Write a non-recursive function flatten(array) that flattens arrays of any depth into one array.
// Values of other types should remain unchanged.
// Constraints:

//     - Recursion cannot be used
//     - The built-in method Array.prototype.flat() cannot be used
//     - No array modification methods can be used after creation except pop/push

function flatten(array) {
    const stack = []
    const result = []

    for (let i = array.length - 1; i >= 0; i--){
        stack.push(array[i])
    }

    while(stack.length){
        const element = stack.pop()
        if(Array.isArray(element)){
            for(let i = element.length - 1; i>=0; i--){
                stack.push(element[i])
            }
        }else{
            result.push(element)
        }
    }
    return result
}
