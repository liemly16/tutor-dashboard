const config = require('config')
const helper = require('../helpers/helper')
const CLIENT_LEAVE = "CLIENT_LEAVE"
const CLIENT_JOIN = "CLIENT_JOIN"
const CLIENT_WAIT = "CLIENT_WAIT"
const CLIENT_PLAY = "CLIENT_PLAY"
const CLIENT_CHAT = "CLIENT_CHAT"
const CLIENT_UNDO = "CLIENT_UNDO"
const CLIENT_RES_UNDO = "CLIENT_RES_UNDO"
const CLIENT_SURRENDER = "CLIENT_SURRENDER"
const CLIENT_ASK_PEACE = "CLIENT_ASK_PEACE"
const CLIENT_RES_PEACE = "CLIENT_RES_PEACE"

module.exports = function (server) {

    var io = require('socket.io')(server, {
        pingTimeout: 30000,
        origins: '*:*'
    })

    var rooms = []

    // have connect from client
    io.on('connection', socket => {
        // STEP 1: check room available
        if (rooms.length > 0) {
            let room = rooms.pop()
            socket.join(room[1], () => {
                // send to host id of other play
                io.to(room[0]).emit(CLIENT_JOIN, [socket.id, room[1]])
                // send to other play host id and room
                io.to(socket.id).emit(CLIENT_JOIN, room)
            })
        }
        else { // dont have any room available
            let key = helper.generateKey(10);
            // ROOM FACTORY
            socket.join(key, () => {
                // add new user to room
                let room = Object.keys(socket.rooms)
                rooms.push(room)

                io.to(room[0]).emit(CLIENT_WAIT, room[1])
            })
        }

        // CLIENT PLAY AT POSITION
        socket.on(CLIENT_PLAY, (socketId, position) => {
            console.log(socketId + " play at " + position)
            io.to(socketId).emit(CLIENT_PLAY, position)
        })

        // CLIENT CHAT
        socket.on(CLIENT_CHAT, (socketId, message) => {
            console.log(socketId + " chat with msg " + message)
            io.to(socketId).emit(CLIENT_CHAT, message)
        })

        // CLIENT UNDO
        socket.on(CLIENT_UNDO, (socketId) => {
            console.log(socketId + " want to undo")
            io.to(socketId).emit(CLIENT_UNDO)
        })

        // CLIENT RESPONSE UNDO
        socket.on(CLIENT_RES_UNDO, (socketId, res) => {
            console.log(socketId + " want to undo")
            io.to(socketId).emit(CLIENT_RES_UNDO, res)
        })

        // CLIENT ASK PEACE
        socket.on(CLIENT_ASK_PEACE, socketId => {
            console.log(socketId + " ask to peace")
            io.to(socketId).emit(CLIENT_ASK_PEACE)
        })

        socket.on(CLIENT_RES_PEACE, (socketId, res) => {
            console.log(socketId + " res to request peace " + res)
            io.to(socketId).emit(CLIENT_RES_PEACE, res)
        })


        // CLIENT SURRENDER
        socket.on(CLIENT_SURRENDER, socketId => {
            console.log(socketId + " accepted surrender")
            io.to(socketId).emit(CLIENT_SURRENDER)
        })

        // WHEN DISCONNECT
        socket.on('disconnect', (reason) => {
            // leave room in list
            rooms = rooms.filter(x => x[0] !== socket.id)
            //leave room
            let room = Object.keys(socket.rooms)
            console.log(socket.rooms)
            console.log(socket.id + " leave room " + room[1])
            socket.leave(room[1])
            socket.to(room[1]).emit(CLIENT_LEAVE)
        })

    })
}