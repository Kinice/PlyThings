const crypto = require('crypto')
const request = require('request')
const createRobot = require('./robot')

const app = {
  robots: [],
  finishCount: 0,
  robotNeededNum: 0,
  finishLBTestCount: 0,
  emit: 0, // 发送了多少条数据
  errors: {},
  lb: {},
}

function showStatistics() {
  console.log('---------- 数据统计 ---------- ')
  console.log('总共测试机器人数量:', app.robotNeededNum)
  console.log('失败在请求负载服务的数量:', app.robotNeededNum - app.finishCount)
  console.log('进入 socketio 测试的数量:', app.finishCount)
  console.log('总共发送的 socketio 消息数:', app.emit)
  console.log('各个 socketio 服务分配的用户数:')
  console.log('\t', app.lb)
  console.log('错误统计:')
  console.error('\t', app.errors)
}

function addError(key) {
  if (app.errors[key] === undefined) {
    app.errors[key] = 1
  } else {
    app.errors[key] += 1
  }
}

function addSsid(ssid) {
  if (app.lb[ssid] === undefined) {
    app.lb[ssid] = 1
  } else {
    app.lb[ssid] += 1
  }
}

function showHelp() {
  console.log('node run.js <uid start number> <uid end number> [LB url]')
  process.exit(0)
}

function getDigest(room) {
  const appkey = 'qzqdt6f4rx2xp0ff'
  const salt = 'rained_heavily'

  const md5 = crypto.createHash('md5')
  const src = appkey + room + salt

  return md5.update(src).digest('hex')
}


function run(uid, lbUrl) {
  const room = parseInt(uid / 2)
  const digest = getDigest(room)
  const url = lbUrl + '/' + room + '/' + digest

  // 发送请求获取 ssid
  request({
    uri: url,
    method: 'GET'
  }, function(err, res, body) {
    if (!err) {
      if (res.statusCode !== 200) {
        addError(res.statusCode)
        return
      }
      const response = JSON.parse(body)
      if (response.code !== 0) {
        addError('lb_error_' + response.code)
        return
      }
      addSsid(response.data.query.ssid)
      // 启动一个机器人
      app.robots.push(createRobot(response.data, uid, room, function(evt, data) {
        if (evt === 'finish') {
          app.finishCount += 1
        } else if (evt === 'emit') {
          app.emit += 1
        } else if (evt === 'error') {
          addError(data)
        }
      }))
    } else {
      addError(err.message)
    }
    // 通知测试进度
    app.finishLBTestCount += 1
  })
}

// 分析参数
const argv = process.argv.splice(2)
if (argv.length < 2) {
  showHelp()
}

const uidStart = parseInt(argv[0])
const uidEnd = parseInt(argv[1])
let lbUrl = 'http://127.0.0.1:12340'

if (argv.length > 2) {
  lbUrl = argv[2]
}
lbUrl += '/lb/ws_conf'

// 启动机器人
app.robotNeededNum = uidEnd - uidStart + 1
// 每秒增长 10 - 20 个用户
// 每 1-3 秒增长一次，每次增长 10 - 20 个用户
let createdRobotCount = 0

function makeRobotStepByStep() {
  if (createdRobotCount == app.robotNeededNum) return

  // 判断这次增加多少个用户
  let n = parseInt(Math.random() * 11) + 10
  if ((n + createdRobotCount) > app.robotNeededNum) {
    n = app.robotNeededNum - createdRobotCount
  }

  const istart = createdRobotCount + uidStart
  createdRobotCount += n

  setTimeout(function() {
    for (let i = 0; i < n; ++i) {
      run(i + istart, lbUrl)
    }

    makeRobotStepByStep()
  }, (parseInt(Math.random() * 3) + 1) * 1000)
}

makeRobotStepByStep()

setInterval(function() {
  const lrb = app.robots.length
  console.log('机器人个数:', lrb, '已经结束的数量:', app.finishCount)
  if (app.robotNeededNum === app.finishLBTestCount &&
    lrb == app.finishCount) {
    showStatistics()
    process.exit(0)
  }
}, 1000);