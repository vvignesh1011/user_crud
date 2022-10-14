var express = require('express');
var router = express.Router();
const uesers=require('../models/user')

/* GET home page. */
router.get('/', async function(req, res, next) {
  var user=await uesers.find();
  res.render('index',{'user':user});
});

module.exports = router;
