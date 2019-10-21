'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('kpi_lab'));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/register');
app.use('/register', usersRouter);
app.use('/', indexRouter);

app.listen(3000); 

module.exports = app;
