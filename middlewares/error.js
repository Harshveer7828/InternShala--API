const { stack } = require("../routes/indexRouter");

exports.generatedError = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        message : err.message,
        errName: err.name,
        // stack : err.stack // long message is called stack
    })
}