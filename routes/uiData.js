var express = require('express');
var data = require('../data/ss_data.json');
//var data = require('../data/testData.json');
console.log(data);

var router = express.Router();


router.route("/")
	.get(function(req, res, next){
		res.json(data);
	});

module.exports = router;