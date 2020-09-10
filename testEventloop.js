console.log('main1')                                                                                                                                                                     

process.nextTick(() => {
  console.log('next tick1')
})

setTimeout(() => {
  console.log('settimeout')
  process.nextTick(() => {
    console.log('next tick2')
  })  
}, 0)

setTimeout(() => {
  console.log('setTimeout2')
  process.nextTick(() => {
    console.log('next tick3')
  })  
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  })  
  console.log('promise1')
}).then(() => {
  console.log('promise2')
})

console.log('main2')
