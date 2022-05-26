const errorHandler = require("./middlewares/error");
const express = require("express");



// init application
const app = express();


// init middleware










// error handling middle must come after all the routes (I prefer placing it just before the app.listen method)
app.use(errorHandler);