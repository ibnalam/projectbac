const express = require('express')
const route = express.Router()
const creatprojectSchema = require('../../model/creatprojectSchema.js')



route.get('/project', async function (req, res) {
    let data = await creatprojectSchema.find({})
    res.send("getdata")
   res.send(data)
 })
 



module.exports = route