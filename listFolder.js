const fs = require('fs')

// fs.readdir('./', (err, files) => {
//     if(err){
//         console.log(err)
//     }
//     for(let i = 0; i < files.length; i++){
//         fs.stat('./'+files[i],(err, stats) => {
//             console.log(stats.isDirectory())
//         })
//     }
// })
const baseDir = '/Users/sunzhaopeng/WebProjects/element-spa-sample'
let finalObj = {}


let listFolder = (dir,parentObj) => {
    let count = 0

    let files = fs.readdirSync(dir)

    for(let i = 0; i < files.length; i++){
        let childObj = {}
        let tempObj = {
            name: '',
            isFile: '',
            subDir: {}
        }
        let stat = fs.statSync(dir+'/'+files[i])

        if(files[i].substr(0,1)=='.') continue

        tempObj.name = files[i]

        if(stat.isDirectory()){
            tempObj.isFile = false
            tempObj.subDir = listFolder(dir+'/'+files[i],childObj)
            parentObj[count++] = tempObj
        }else{
            tempObj.isFile = true
            parentObj[count++] = tempObj
        }
    }
    return parentObj
}


listFolder(baseDir, finalObj)
console.log(finalObj)