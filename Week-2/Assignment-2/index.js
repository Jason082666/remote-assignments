function max(numbers) {
  let comparison = 0
  for (const elements of numbers) {
    if (elements > comparison) {
      comparison = elements
    }
  }
  return comparison
}

console.log(max([0, -1, -2, -3, 9]) === 9)
console.log(max([0, -1, -1, -1, -1]) === 0)
console.log(max([0, 6, 6, 6, 6]) === 6)


function findPosition(numbers, target) {
  // your code here, for-loop method preferred
  let position = -1
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === +target) {
      position = i
      break
    }
  }
  return position
}
console.log(findPosition([1, 2, 2, 2, 2, 4, 5], 2) === 1)
console.log(findPosition([1, 5, 3, 4, 5, 4, 3], 5) === 1)
console.log(findPosition([1, 2, 3, 4, 5, 6, 5], 7) === -1)
console.log(findPosition([1, 2, 3, 4, 5, 6, 5], '2') === 1)