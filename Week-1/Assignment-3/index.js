// function countAandB

function countAandB(input) {
  let countA = 0
  let countB = 0
  for (const i of input) {
    if (i === 'a') {
      countA += 1
    } else if (i === 'b') {
      countB += 1
    }
  }
  return `${countA + countB} (${countA} 'a' letters and ${countB} 'b' letters)`
}


//function toNumber

// function toNumber(input){
//   let returnArray = []
//   const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   for (let i of input) {
//     let output = array.indexOf(i)+1
//     if (output) {
//       returnArray.push(output)
//     } else {
//       returnArray.push('default')
//     }
//   }
//   return returnArray
// }

function toNumber(input) {
  let returnArray = []
  const obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': !4,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  }
  for (let i of input) {
    if (obj[i]) {
      returnArray.push(obj[i])
    } else {
      returnArray.push('default')
    }
  }
  return returnArray
}

console.log(toNumber(['a', 'c', 'd', 'r']))