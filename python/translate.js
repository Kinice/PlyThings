const fs = require('fs')

var data = fs.readFileSync('translate.txt').toString().split(/\r?\n/ig)
var text = []
var finArr = []
var finStr = ''
console.log('读取文件信息')
for(let i = 0; i < data.length; i++){
    let tmpObj = {
        ch:'',
        en:''
    }
    tmpObj.ch = data[i].split('|')[1]
    tmpObj.en = data[i].split('|')[2]
    finArr.push(tmpObj);
}   
console.log('写入文件')
for(let i in finArr){
    let tmpStr = "u'"+finArr[i].ch+"': '"+finArr[i].en+"',\n";
    finStr = finStr+tmpStr;
}

fs.writeFile('output.txt',finStr,(err)=>{
    if(err){
        return console.error(err)
    }
    console.log('写入成功')
})