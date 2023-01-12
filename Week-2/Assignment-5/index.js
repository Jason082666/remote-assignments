function binarySearchPosition(numbers, target) {
  // your code here
  let startPoint = 0
  let endPoint = numbers.length - 1
  let midPoint = 0
  do {
    midPoint = Math.floor((startPoint + endPoint) / 2)
    if (startPoint > endPoint) {
      return -1
    }
    if (numbers[midPoint] === target) {
      return midPoint
    } else if (numbers[midPoint] > target) {
      endPoint = midPoint - 1
    } else {
      startPoint = midPoint + 1
    }
  } while (numbers[midPoint] !== target)
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 2));
// should print 1

console.log(binarySearchPosition([1, 2, 5, 6, 7], 6));
// should print 3

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1));
// should print 0

console.log(binarySearchPosition([1, 2, 5, 6, 7, 8, 9, 11, 12], 10));
// should print -1 