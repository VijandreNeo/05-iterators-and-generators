function createIterable(length) {
  let start = 0
  let fiboArr

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (start < length) {
            if (fiboArr !== undefined) {
              if (fiboArr.length === 1) {
                fiboArr = [...fiboArr, 1]
              } else {
                fiboArr = [...fiboArr, fiboArr[start - 2] + fiboArr[start - 1]]
              }
            } else {
              fiboArr = [0]
            }
            start += 1
            return { value: fiboArr, done: false }
          }
          return { value: undefined, done: true }
        },
      }
    },
  }
}

const iterator = createIterable(14)

for (let index of iterator) {
    console.log(index)
}
