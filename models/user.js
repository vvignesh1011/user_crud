const mongoose = require("mongoose");
const Schema=mongoose.Schema;


var schema =new Schema(
    {
        name:{type:String,require:true},
        mobileNO:{type:Number,require:true},
        email:{type:String,require:true},
        active:{type:Boolean,require:true,default:false}
    }
);


module.exports=mongoose.model('users',schema);