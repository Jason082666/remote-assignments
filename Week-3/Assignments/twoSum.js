function twoSum(nums, target) {                                  
  let array = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
//法一:使用雙迴圈，時間複雜度為O(N^2) 

function twoSum1(nums, target) {            
  let dict = {                                
    ...nums                                   
  }
  const newDict = {}
  for (let key in dict) {
    const value = dict[key]
    newDict[value] = +key
  }
  for (let key in newDict) {
    let targetNumber = target - +key
    if (newDict[targetNumber]) {
      return [newDict[key], newDict[targetNumber]]
    }
  }
}
/*法二:同樣使用兩個迴圈，但由於不是巢狀結構，因此時間複雜度為O(N^2)，但空間複雜度較法一高
第一個迴圈將input陣列轉換成一key、value顛倒的object，第二個迴圈使用object用key找值的概念，
使複雜度只有O(N)。*/

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum1([2, 7, 11, 15], 9))