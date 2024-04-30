exports.catchAsyncErrors = (func) => (req,res,next) =>{
    // this is the 
    Promise.resolve(func(req,res,next)).catch(next);

};