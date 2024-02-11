const express = require('express')
const route = express.Router()
const creatprojectSchema = require('../../model/creatprojectSchema.js')



route.post('/project', async function (req, res) {
    res.send("delete")
    const {id} = req.body
    await creatprojectSchema.findByIdAndDelete({_id:id})
    res.send("delete successfully") 
  })
  



module.exports = route