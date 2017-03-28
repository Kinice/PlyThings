let swap = (i,j,array) => {
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
}
let bubbleSort = array => {
    let length = array.length,
        isSwap

    for(let i = 0; i < length; i++){
        isSwap = false
        for(let j = length-1; j >= i+1; j--){
            array[j] < array[j-1] && (isSwap = true) && swap(j,j-1,array)
        }
        if(!isSwap) break
    }
    return array
}