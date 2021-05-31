var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
var logger = require('morgan');
const cors = require('cors');

var app = express();
app.use(cors());

require('./auth/passport');
require('./models/Users');

const api = require('./api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1", api);

var logger = (req, res, next) => {
    console.log(req.method + ' ' + req.url);
};
app.use(logger);

//Start Sever
app.listen(8090, function(){
    console.log('Server started on port 8090');
});

module.exports = app;
