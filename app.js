var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var appName = "requestLogger";
var port = "8008";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/" + appName, function (req, res) {
    res.render("home.ejs");
});

app.post("/" + appName + "/postroute", function (req, res) {
    console.log(req.body);
    res.send("post route");

})

app.listen(port, "localhost", function () {
    console.log(appName + " has started on port " + port);
});