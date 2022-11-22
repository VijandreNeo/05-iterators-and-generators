function createGenerator() {
  let count = 0
  let initialVal = 0
  let secondaryVal = 1
  let resultVal
  let storeInitVal

  return function* generator(length) {
    while (count < length) {
      resultVal = initialVal + secondaryVal
      storeInitVal = initialVal
      initialVal = secondaryVal
      secondaryVal = resultVal

      count += 1
      yield storeInitVal
    }
  }
}

const generatorFunction = createGenerator()
const generatorObj = generatorFunction(14)

for (let index of generatorObj) {
  console.log(index)
}
