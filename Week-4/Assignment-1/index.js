function delayedResult(n1, n2, delayTime, callback) {
// your code here
const result = n1 +n2
setTimeout(callback,delayTime,result)
}


delayedResult(4, 5, 3000, function (result) {
console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds


function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise((resolve, reject) => {
    const result = n1 + n2
    setTimeout(() => {
      resolve(result)
    }, delayTime)
  })
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const result = await delayedResultPromise(4, 5, 3000)
  console.log(result)

}
main(); // result will be shown in the console after <delayTime> seconds