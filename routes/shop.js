const express=require('express')
const router=express.Router()

router.use('/shop',(req,res,next)=>{
     res.send('<h1>Done</h1>')
})

module.exports=router