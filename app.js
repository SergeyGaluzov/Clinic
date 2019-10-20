'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('kpi_lab'));
app.set("view engine", "hbs");
/* app.get('/', function(request, response)
{
  response.redirect('index.html');
}); */
app.post('/enter', urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  response.render("enter.hbs", {
    email: request.body.email,
    password: request.body.password,
});
});
app.listen(3002); 