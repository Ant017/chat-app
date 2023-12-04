const authModel = require("../model/auth")
const userModel = require("../model/user")
const chatModel = require("../model/chat")
const response = require("../utils/successError")
const http = require("../constants/statusCodes")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require('crypto')
const { validationResult } = require("express-validator")

class ChatController {
    async createChat(req, res) {
        try {

            // const { lastMessage, participants } = req.body;
            const participants = [
                new mongoose.Types.ObjectId(req.user.userID),
                new mongoose.Types.ObjectId(req.body.userID),
            ]

            const existingChat = await chatModel.findOne({
                participants: {
                    $all: participants
                }
            })

            if (existingChat) {
                return response(res, http.OK, "chat retrieved", existingChat)
            }

            const chat = await chatModel.create({
                participants,
            })

            return response(res, http.OK, "Chat created", chat)
        } catch (error) {
            console.log(error);
            return response(res, http.INTERNAL_SERVER_ERROR, "Internal Server Error", error.message)
        }
    }
}

module.exports = new ChatController()