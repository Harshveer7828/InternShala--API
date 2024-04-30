const {catchAsyncErrors} = require("../middlewares/catchAsyncErrors.js")

exports.homePage = catchAsyncErrors (async (req,res,next)=>{
    try {
        res.json({message:"hello form the route"})
    } catch (error) {
        res.status('500').json(error.message)
    }
});