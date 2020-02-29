// get express
const express = require("express");
const app = express();

// call .env file
require("dotenv").config();

// use body parser to use post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static File Service
app.use(express.static("public"));

// API Module
// require("./routes/index")(app);
// require("./routes/engine")(app);
// require("./routes/dialogflow")(app);

// start API
var server = app.listen(process.env.API_PORT, function() {
    console.log("-----------API INFORMATION-----------\n");
    console.log("host : " + process.env.API_HOST);
    console.log("port : " + process.env.API_PORT);
    console.log(
        "\nYou can change The Api info in the /.env file,\nIf this info is wrong.\n"
    );
    console.log("---------------------------------------");
    console.log("start API ....\n");
});
