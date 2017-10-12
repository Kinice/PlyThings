let originArr = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < originArr.length; i++) {
    //指针从尾起
    let pointer = originArr.length - i - 1

    let rand = Math.floor(Math.random() * pointer)

    let temp = originArr[pointer]

    originArr[pointer] = originArr[rand]

    originArr[rand] = temp
}

console.log(originArr)