var express = require('express');
var data = require('../data/ss_data.json');
//var data = require('../data/testData.json');
//console.log(data);

var router = express.Router();
const share = data.share.reduce((obj, share) => {
									console.log(share);
									obj[share.id] = share;
									return obj;
						},{}
				);	

router.route("/")
	.get(function(req, res, next){
		res.send(share)
	});

module.exports = router;
