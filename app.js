require("dotenv").config();
const express = require("express");
const app = express();

// Database configuration

require("./models/database.js").connectDatabase();

//logger : Give the info about the hitting route
const logger = require("morgan");
app.use(logger("tiny"));

// body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//session and cookie
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.EXPRESS_SESSION_SCRETE,

}))

app.use(cookieparser());

// handle the routes
app.use("/", require("./routes/indexRouter.js"));

//Error Handling
const ErrorHandler = require("./utils/errorHandler.js");
const { generatedError } = require("./middlewares/error.js");

// Route * this is all route if the above route is not get then this route is hit which generates the error.
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Requested URL ${req.url} Not Found`, 404));
});

app.use(generatedError);

// listening server always at the bottom
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
