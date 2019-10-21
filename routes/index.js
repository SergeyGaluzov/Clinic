var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.sendFile(__dirname.replace("routes", "") + "kpi_lab/main.html");
});

module.exports = router;
