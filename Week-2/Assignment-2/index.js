function avg(data) {
  // your code here
  let total = 0
  const array = data.products
  for (const i of array) {
    total += i.price
  }
  let average = total / data.size
  return average
}

// test function avg
console.log(avg({
  size: 3,
  products: [{
      name: 'Product 1',
      price: 100,
    },
    {
      name: 'Product 2',
      price: 700,
    },
    {
      name: 'Product 3',
      price: 250,
    },
  ],
}))
