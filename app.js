require('dotenv').config();
const express = require('express');
const app = express();


//logger
const logger = require('morgan');
app.use(logger("tiny"));

// handle the routes
app.use('/',require('./routes/indexRouter.js'))


// listening server always at the bottom
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})


