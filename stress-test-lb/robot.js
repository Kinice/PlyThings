/**
 *
 * @param {object} socketConf LB 服务返回的连接 socketio 的配置
 * @param {string} uid 用户 ID
 * @param {string} room 房间号
 * @param {string} callback(event, data)
 *      event    | data
 *     -------------------
 *      'finish' | null         完成测试
 *      'emit'   | null         调用了 socketio
 *      'error'  | error msg    出现了错误
 */

const io = require('socket.io-client')

function makeUri(url, query) {
  let uri = url
  let first = true
  for (let i in query) {
    if (first) {
      first = false
      uri += '?' + i + '=' + query[i]
    } else {
      uri += '&' + i + '=' + query[i]
    }
  }
  return uri
}

module.exports = function(socketConf, uid, room, callback) {
  // 连接
  const socket = io(makeUri(socketConf.url, socketConf.query), {
    path: socketConf.path,
    transports: socketConf.transports
  })

  const emit = function(channel, data) {
    socket.emit(channel, data)
    callback('emit', null)
  }

  let msgCounter = 0
  let msgTimes = 100

  const sendRandCountMsg = function() {
    // 发送 5 到 20 条消息
    let n = parseInt(Math.random() * 15 + 1) + 5
    while (n-- > 0) {
      emit('msg', {
        storage: parseInt(Math.random() * 3),
        msgId: msgCounter,
        data: ['hello', 1, 3, 2, '--------------', 'end']
      })
      msgCounter += 1
    }
  }

  const checkSendMsg = function() {
    //   if (msgTimes > 0)
    if (msgTimes < 1) {
      callback('finish', null)
      return
    }
    msgTimes -= 1

    // 发送数据，休息 1 到 3秒
    sendRandCountMsg()
    setTimeout(checkSendMsg, (parseInt(Math.random() * 3) + 1) * 1000)
  }

  socket.once('connect', function() {
    emit('authenticate', {
      uid: uid,
      token: uid
    });
  })

  socket.once('connect_error', function(err) {
    console.error(uid, 'connect error:', err)
    callback('error', err.message)
    callback('finish', null)
  })

  socket.on('authenticate', function(msg) {
    if (msg.status === 0) {
      console.log(uid, 'auth success')
      emit('join', {
        roomId: room
      })
    } else {
      console.error(uid, 'auth failed', msg)
      callback('error', 'auth failed')
      callback('finish', null)
    }
  })

  socket.on('join', function(msg) {
    if (msg.status === 0) {
      console.log(uid, 'join success');
      setTimeout(checkSendMsg, 2000)
    } else {
      console.error(uid, 'join failed', msg)
      callback('error', 'join failed')
      callback('finish', null)
    }
  })
}