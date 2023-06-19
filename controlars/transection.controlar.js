const createError=require('http-errors')
const Transectionmodel = require('../Schema/transection.module')
const moment = require('moment/moment')

const Addtransection=async(req,res,next)=>{
    try {
const transection=await Transectionmodel(req.body)

if (!transection) {
  return  createError(401,'transection not added')
}
await transection.save()

res.status(200).send({
    success:true,
    message:'addTransection successfull'
})

    } catch (error) {
         next(createError(500,'addTransection fail'))
       throw error 
    }
}


const getAlltransection=async(req,res)=>{
  try {
    const {frequiency,time,type}=req.body
const date=moment().subtract(Number(frequiency),'d').toDate()
console.log(date);
    const alltarnsection=await Transectionmodel.find(
      {
...(frequiency !=='coustom'?{
  date:{$gt:date},}
  :{
date:
{
$gte:time[0],
$lte:time[1]
}
})
,

...(type!=='All'&&{type:type}),


      userId:req.body.userId
    }
      )
if (!alltarnsection) {
  return createError(401,'all transection not found')
} 

res.status(200).send({
  success:true,
  message:'All transection get successfull',
  data:alltarnsection
})
    
  } catch (error) {
    console.log(error);
    throw error
  }
}


const deleteTbalelist=async(req,res,next)=>{
  try {
    const id=req.body.listId

await Transectionmodel.deleteByID({_id:id})

res.status(200).send({
  succes:true,
  message:"delete successfull"
})

  } catch (error) {
    console.log(error);
    throw error
  }
}


const EditeTableList=async(req,res,next)=>{
try {
  
await Transectionmodel.findByIdAndUpdate({_id:req.body.listId},req.body)

res.status(200).send({
  succes:true
})

} catch (error) {
  console.log(error);
  throw error
}
}


module.exports={
  Addtransection,
  getAlltransection,
  deleteTbalelist,
  EditeTableList
}