function count(input) {
  let output = {}
  let trim = input.filter((item, index) => input.indexOf(item) === index)
  for (const element of trim) {
    const value = input.filter((i) => i === element).length
    output[element] = value
  }
  return output
}
// test function count
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  let output = {}
  let keyArray = input.map((element) => element.key)
  let trimKeyArray = keyArray.filter((element, index) => keyArray.indexOf(element) === index)
  for (const i of trimKeyArray) {
    let value = 0
    for (const j of input) {

      if (j.key === i) {
        value += j.value
      }
    }
    output[i] = value
  }
  return output
}
// test function groupByKey
let input2 = [{
    key: "a",
    value: 3
  },
  {
    key: "b",
    value: 1
  },
  {
    key: "c",
    value: 2
  },
  {
    key: "a",
    value: 3
  },
  {
    key: "c",
    value: 5
  },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
