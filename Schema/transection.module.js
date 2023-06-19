const momgoose= require('mongoose')


const TransectionSchema=new momgoose.Schema({
userId:{
type:String,
require:[true,'UserId is required']
},
amount:{
    type:Number,
    require:[true,"amount is require"]
},
type:{
    type:String,
    require:[true,"type is require"]
},
category:{
    type:String,
    require:[true,"category is require"]
},
date:{
    type:Date,
    require:[true,"Date is require"]
}, 
refrence:{
    type:String,
    require:[true,"refrece is require"]
}, 
discription:{
    type:String,
    require:[true,"discription is require"]
},
})



const Transectionmodel=momgoose.model("transection",TransectionSchema)
module.exports=Transectionmodel