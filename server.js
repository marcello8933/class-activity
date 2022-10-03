var express = require("express");
var app = express();
var fs = require("fs");
var HTTT_PORT = process.env.PORT || 3000;

function onHttpStart() {
    console.log("express http server listening on:" + HTTT_PORT);
}

app.get("/", function(req, resp){
    var username= req.query.username;
    var password = req.query.password;

    try{
        //fs.appendFile("database.txt", username +"," + password + "\n");
        fs.appendFile("database.txt", username +"," + password + "\n", function(err){console.log(err)});
    }
    catch(err){
        console.log(err);
    }

    resp.send("<h1>Username: " + username + ", password: " + password + "</h1>");
});

app.listen(HTTT_PORT, onHttpStart);