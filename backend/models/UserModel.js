const mongoose = require('mongoose');
const { UserType } = require('./UserType');
const userSchema = new mongoose.Schema({
    fristName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    role: {
        type: String,
        required: true,
        default: UserType.USER,

    },
    password: {
        type: String,
        required: true,

    }
}, { timestamps: true })


const User = mongoose.model('user', userSchema); //model
module.exports = User;