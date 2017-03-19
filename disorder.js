var disorder = arr => {
    let length = arr.length
    while(length){
        let rand = Math.floor(Math.random()*length),
            t = arr[rand]

        arr[rand] = arr[length-1]
        arr[length-1] = t
        length--
    }
    return arr;
}