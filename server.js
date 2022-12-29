const express = require("express");
var app = express();

var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("public/index.html",{root:__dirname})
});

app.get("/home",function(req,resp){
    resp.send("<h1>Welcome to home page</h1>")
});

app.listen(3000);
console.log("Server is running on port number 3000");