var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "Michael Jackson"
  }, {
  	id: 2,
  	username: "John Doe"
  }, {
  	id: 3,
  	username: "Jane Smith"
  }]);
});

module.exports = router;
