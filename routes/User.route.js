const express=require('express')
const router=express.Router()


const { getUserPagination, singleUserBYID, deleteBYID, RegisterProcess, loginUser } = require('../controlars/User.controlar')



// GET User And Pagination
router.get("/user/get-User/pagination",getUserPagination)
// GET Single User BY ID
router.get("/user/get-Single-user/:id",singleUserBYID)
//Delete user BY ID
// router.delete("/user/delete-user/:id",deleteBYID)
//REgister process
router.post("/user/Register-user",RegisterProcess)
//Ligin
router.post("/user/login-user",loginUser)

module.exports=router