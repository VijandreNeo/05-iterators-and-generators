function createIterable(length) {
  let count = 0
  let initialVal = 0
  let secondaryVal = 1
  let resultVal
  let storeInitVal

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (count < length) {
            resultVal = initialVal + secondaryVal
            storeInitVal = initialVal
            initialVal = secondaryVal
            secondaryVal = resultVal
            count += 1
            return { value: storeInitVal, done: false }
          }
          return { value: undefined, done: true }
        },
      }
    },
  }
}

const iterator = createIterable(14)

for (const index of iterator) {
  console.log(index)
}
