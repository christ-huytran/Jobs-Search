var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/routes.js')(app);

app.listen(7000);