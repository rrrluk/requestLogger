var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const { createLogger, format, transports } = require('winston')

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.timestamp({
                  format: 'YYYY-MM-DD HH:mm:ss'
                }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    transports: [new transports.Console()]
});


var appName = "requestLogger";
var port = "8008";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set("view engine", "ejs");
// ei saa DO reverse proxyt tööle muidu, läheb / kataloogist otsima neid views-i
app.set('views', appName + '/views');

app.get("/" + appName, function (req, res) {
    res.render("home.ejs");
});

app.post("/" + appName + "/postroute", function (req, res) {
    logger.info('--- REQUEST ---')
    console.log(req.headers);
    console.log(req.body);
    res.send("post route");

})

app.listen(port, "localhost", function () {
    console.log(appName + " has started on port " + port);
});
