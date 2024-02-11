const express = require('express')
const route = express.Router()
const creatprojectSchema = require('../../model/creatprojectSchema.js')
// const sequrepost = require("../../middleware/sequrepost.js")
// const blanckinput = require('../../middleware/helpers/blanckinput.js')



route.post('/project', async function (req, res) {
    res.send("update")
    const {id,name} = req.body 
    await creatprojectSchema.findByIdAndUpdate({_id:id},{name:name})
    
    
   res.send("update successfully")
  })
  






module.exports = route