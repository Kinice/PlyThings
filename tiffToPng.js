const fs = require('fs')
const { exec } = require('child_process')
const files = fs.readdirSync(process.cwd())

files.forEach(item => {
  if (item.indexOf('.tiff') > -1) {
    let name = item.split('').slice(0, -5).join('')
    exec(`ffmpeg -i ${name}.tiff ${name}.png`, (error, stdout, stderr) => {
      if (error) {
        console.error(error)
        return
      }
    })
  }
})
