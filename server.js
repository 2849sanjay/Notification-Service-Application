const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.configs");
const serverConfig = require("./configs/server.config");

const app = express();


// register the body-parser middleware to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// need to connect Database
mongoose.connect(dbConfig.DB_URL, () => {
    console.log("MongoDB Connected");
}, err => {
    console.log("Error while connecting", err);
})

// stitching the routes  
require('./routes/notification.route')(app);

//  started the server
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on Port",serverConfig.PORT);
})
   

