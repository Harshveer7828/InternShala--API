require('dotenv').config();
const express = require('express');
const app = express();


//logger
const logger = require('morgan');
app.use(logger("tiny"));

app.get('/', (req,res,next)=>{
    res.status(200).json({messgae:"hello from the / route"})
})


// listening server always at the bottom
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})


