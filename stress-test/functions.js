'use strict';

module.exports = {
    setUser: setUser,
    setRoom: setRoom,
    sendRandCountMsg: sendRandCountMsg
}

// 用户 ID 计数器
let uidCounter = 1000

function setUser(ctx, ee, next) {
    // 设置当前用户的 UID
    ctx.vars.uid = '' + uidCounter
    ctx.vars.msgCounter = 0
    uidCounter += 1
    return next()
}

function setRoom(ctx, ee, next) {
    // 设置当前用户的房间号
    const cuid = parseInt(ctx.vars.uid)
    ctx.vars.room = '' + parseInt(cuid / 2)
    return next()
}

function sendRandCountMsg(ctx, ee, next) {
    // 发送 5 到 20 条消息
    let n = 15
    const socket = ctx.sockets['/']
    while (n-- > 0) {
        socket.emit('msg', {
            storage: parseInt(Math.random() * 3),
            msgId: ctx.vars.msgCounter,
            data: ['hello', 1, 3, 2, '--------------', 'end']
        })
        ctx.vars.msgCounter += 1
    }
    return next()
}
