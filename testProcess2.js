setTimeout(() => {
    console.log('t1')
    Promise.resolve().then(() => {
        console.log('p1')
    })
})


setTimeout(() => {
    console.log('t2')
    Promise.resolve().then(() => {
        console.log('p2')
    })  
}) 
