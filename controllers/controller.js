const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors.js")
const Student = require('../models/studentModel.js');

exports.homePage = catchAsyncErrors(async (req, res, next) => {
    res.json({ message: "hello form the route" })
});

exports.studentSignUp = catchAsyncErrors(async (req, res, next) => {
    const student = await new Student(req.body).save();
    res.status(201).json(student);
});