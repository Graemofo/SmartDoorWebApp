

var express = require("express");
var firebase = require("firebase");
var	app = express();
var firebase = require("firebase");

var	http = require("http").Server(app).listen(8000);

console.log("Server running on port 8000");


app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/fonts", express.static("./fonts"));


app.get("/", function(req, res){
	res.sendFile(__dirname+ "/login.html");  //homepage is login
})

app.get("/register", function(req, res){
	res.sendFile(__dirname+ "/register.html");
})

app.get("/index", function(req, res){
	res.sendFile(__dirname+ "/index.html");
})

