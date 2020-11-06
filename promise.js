Promise.myAll = function(promiseArr) {
  function done(length, resolve) {
    let count = 0
    let values = []
    return function(value, index) {
      count++
      values[index] = value
      if (count === length) {
        resolve(values)
      }
    }
  }
  return new Promise((resolve, reject) => {
    let gen = done(promiseArr.length, resolve)
    promiseArr.forEach((promise, index) => {
      promise.then(value => {
        gen(value, index)
      }, err => {
        reject(err)
      })
    })
  })
}