console.log('2019新税法计算器v0.2.1')
const Readline = require('readline')
const taxTable = [{
    min: 0,
    max: 36000,
    rate: 0.03,
    sub: 0
}, {
    min: 36000,
    max: 144000,
    rate: 0.1,
    sub: 2520
}, {
    min: 144000,
    max: 300000,
    rate: 0.2,
    sub: 16920
}, {
    min: 300000,
    max: 420000,
    rate: 0.25,
    sub: 31920
}, {
    min: 420000,
    max: 660000,
    rate: 0.3,
    sub: 52920
}, {
    min: 660000,
    max: 960000,
    rate: 0.35,
    sub: 85920
}, {
    min: 960000,
    max: null,
    rate: 0.45,
    sub: 181920
}]
const taxTableCounts = [0, 36000, 144000, 300000, 420000, 660000, 960000]
let [userIncome, userInsurance, userSub] = ''

function getTaxTableIndex(totalIncome) {
    for (let i = 0; i < taxTableCounts.length; i++) {
        if (i < (taxTableCounts.length - 1)) {
            if (totalIncome > taxTableCounts[i] && totalIncome < taxTableCounts[i + 1]) {
                return i
            }
        } else {
            return taxTableCounts.length - 1
        }
    }
}

function countTax(income = 0, insurance = 0, subcount = 0) {
    let totalTax = 0
    let totalIncome = 0
    let monthData = []
    for (let i = 1; i <= 12; i++) {
        totalIncome += income
        let generatedIncome = income * i - 5000 * i - insurance * i - subcount * i
        let index = getTaxTableIndex(generatedIncome)
        let tax = generatedIncome * taxTable[index].rate - taxTable[index].sub - totalTax
        totalTax += tax
        monthData.push({
            month: i,
            tax: tax,
            totalTax: totalTax,
            totalIncome: totalIncome,
            totalSubIncome: totalIncome - totalTax - (insurance * i)
        })
    }
    return monthData
}

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getReadLine(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            answer = parseFloat(answer)
            if (answer || answer === 0) {
                resolve(answer)
            } else {
                reject('输入错误')
            }
        })
    })
}

getReadLine('请输入你的月收入：').then(ans => {
    userIncome = ans
    return getReadLine('请输入你的五险一金：')
}).then(ans => {
    userInsurance = ans
    return getReadLine('请输入你的总税收减免：')
}).then(ans => {
    userSub = ans
    console.log('结果为:\n')
    console.table(countTax(userIncome, userInsurance, userSub))
    process.exit(0)
}).catch(err => {
    console.error(err)
    process.exit(0)
})