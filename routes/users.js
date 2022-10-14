var express = require('express');
const { ConnectionStates } = require('mongoose');

var router = express.Router();
var users = require('../models/user');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('add');
});


router.post('/add',async(req,res)=>{
  try{const u1=new users(req.body);
    await u1.save();
    res.redirect('/');
  }
  catch(err){
    res.send(err);
  }

});

//for delete
router.delete('/delete/:id',async(req,res)=>{
  try{
    var u1=users.findById(req.params.id);
    await u1.remove();
    res.redirect('/');
  }
  catch(err){
    res.send(err);
  }
})

//providing page for update user
router.get('/update/:id',async(req,res)=>{
var u1=await users.findById(req.params.id);
console.log(u1.name);
res.render('update',{"user":u1});
})

//for updating user detils
router.patch('/update/:id',async(req,res)=>{
  var u1=await users.findById(req.params.id);
  await u1.update(req.body);
  res.redirect('/');
})


module.exports = router;
