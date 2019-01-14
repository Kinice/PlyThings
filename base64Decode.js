const Base64 = require('js-base64').Base64
const Readline = require('readline')
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function rlQuestion() {
  rl.question('输入base64码', (answer) => {
    console.log(Base64.decode(answer))
    rlQuestion()
  })
}

rlQuestion()
