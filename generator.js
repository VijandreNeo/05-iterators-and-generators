function createGenerator() {
  let start = 0

  return function* generator(length) {
    let fiboArr
    while (start < length) {
      if (fiboArr !== undefined) {
        if (fiboArr.length === 1) {
          fiboArr = [...fiboArr, 1]
        } else {
          fiboArr = [...fiboArr, fiboArr[start - 2] + fiboArr[start - 1]]
        }
      } else {
        fiboArr = [0]
      }
      yield fiboArr
      start += 1
    }
  }
}

const generatorFunction = createGenerator()
const generatorObj = generatorFunction(14)

for (let index of generatorObj) {
    console.log(index)
}
