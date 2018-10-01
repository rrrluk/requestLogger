var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var appName = "requestLogger";
var port = "8008";

app.use(bodyParser.urlencoded({
    extenderd: true
}));

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.post("/postroute", function (req, res) {
    console.log(req.body);
    res.send("post route");

})

app.listen(port, "localhost", function () {
    console.log(appName + " has started on port " + port);
});