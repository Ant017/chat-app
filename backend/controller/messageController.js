const authModel = require("../model/auth")
const userModel = require("../model/user")
const chatModel = require("../model/chat")
const messageModel = require("../model/message")
const response = require("../utils/successError")
const http = require("../constants/statusCodes")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require('crypto')
const { validationResult } = require("express-validator")

class MessageController {
    async sendMessage(req, res) {
        try {
            const {content, chat} = req.body;
            if(!content || !chat){
                return response(res, http.BAD_REQUEST, "Please fill all the fields")
            }

            let newMessage = {
                sender: req.user.userID,
                content: content,
                chat: chat
            }

            let message = await messageModel.create(newMessage)

            return response(res, http.OK, "Message sent", message)
            
        } catch (error) {
            console.log(error);
            return response(res, http.INTERNAL_SERVER_ERROR, "Internal Server Error", error.message)
        }
    }
}

module.exports = new MessageController()