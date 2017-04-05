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
let layerCount = 0


let listFolder = (dir,parentObj) => {
    let childObj = {}
    let count = 0

    let files = fs.readdirSync(dir)

    for(let i = 0; i < files.length; i++){
        let stat = fs.statSync(dir+'/'+files[i])

        if(files[i].substr(0,1)!=='.') continue

        if(stat.isDirectory()){
            childObj[count++] = listFolder(dir+'/'+files[i],childObj)
        }else{
            childObj[count++] = files[i]
        }
        parentObj[files[i]] = childObj
    }
    return parentObj
}


listFolder(baseDir, finalObj)
console.log(finalObj)