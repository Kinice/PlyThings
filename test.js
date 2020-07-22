function fn(time,format) {
    // body...
    var type = format;
    var reg = /[\d]{4}[\-]{1}[\d]{2}[\-]{1}[\d]{2}/;
    var date = new Date(time);
    if(reg.test(type)){
        var year = date.getFullYear();
        var month = double(date.getMonth()+1);
        var day = double(date.getDate());
        return year+'-'+month+'-'+day;
    }
}

console.log(fn(new Date().getTime(),'yyyy-mm-dd'))

function double(mon){
    if(mon<10){
        return mon;
    }else{
        return '0'+mon;
    }
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p1')
        if (Math.random() > 0.5) resolve('data1')
        else resolve('data2')
    }, 500)
})

p1.then(data => {
    if (p1.data === 'data1') {
        resolve(p1.data)
    } else {
        reject(p1.data)
    }
}).then(data => {
    console.log(data)
})
