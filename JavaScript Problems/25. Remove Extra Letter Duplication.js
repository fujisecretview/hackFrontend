// Remove Extra Letter Duplication
// Tinkoff
// Write a function that removes consecutive duplicate characters from a string (for example, 'neeeeed' becomes 'ned').

//     - Letter case is preserved.
//     - Non-letter characters also remain in the string, but without duplication.

// Examples:
// Input 1: "neeeeded"
// Output 1: "needed"
// Input 2: "thhhis iiis exxxtraaa teeext"
// Output 2: "this is extra text"

function deleteExtraChar(str) {
  const result = []

  let a = 0

  for(let i = 1; i < str.length + 1; i++){
    const current = str[i]
    const prev = str[a]

    if(current != prev){
      result.push(prev)
    }
    a++
  }
  return result.join('')
}
