// function countAandB

function countAandB(input){
  let countA = 0
  let countB = 0
  for (const i of input) {
    if (i === 'a') {
      countA += 1
    } else if ( i === 'b') {
      countB += 1
    }
  }
 return`${countA + countB} (${countA} 'a' letters and ${countB} 'b' letters)`
}


//function toNumber

function toNumber(input){
  let returnArray = []
  const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let i of input) {
    let output = array.indexOf(i)+1
    if (output) {
      returnArray.push(output)
    } else {
      returnArray.push('default')
    }
  }
  return returnArray
}

