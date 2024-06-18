const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const studentModel = new mongoose.Schema({

    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        select: false,
        match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        maxLength: [20, "Password should not be exceed 20 characters"],
        minLength: [8, "password should not be less than 8 characters"]

    }

}, { timestamps: true });

studentModel.methods.getjwttoken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

const student = mongoose.model('student', studentModel);
module.exports = student;