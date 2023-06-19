const express=require('express')
const router=express.Router()

const {Addtransection,getAlltransection, deleteTbalelist, EditeTableList} = require('../controlars/transection.controlar')



// GET User And Pagination
router.post("/ADD-transection/Add",Addtransection)
// get All transection
router.post("/get-all/transection",getAlltransection)
//Delete list
router.post("/delete/tablelist",deleteTbalelist)
// Edite list 
router.post("/edite/tablelist",EditeTableList)


module.exports=router