const express = require('express')
const routes = express()
const ChatController = require('../controller/chatController')
const { isUserLoggedIn } = require('../middleware/auth')

routes.post("/create-chat", isUserLoggedIn, ChatController.createChat)

module.exports = routes 