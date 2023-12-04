const express = require('express')
const routes = express()
const ChatController = require('../controller/chatController')
const MessageController = require('../controller/messageController')
const { isUserLoggedIn } = require('../middleware/auth')

routes.post("/send-message", isUserLoggedIn, MessageController.sendMessage)

module.exports = routes 