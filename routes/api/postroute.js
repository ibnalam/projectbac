const express = require('express')
const route = express.Router()
const creatprojectSchema = require('../../model/creatprojectSchema.js')
const sequrepost = require("../../middleware/sequrepost.js")
const blanckinput = require('../../middleware/helpers/blanckinput.js')





route.post('/project', sequrepost, function (req, res) {
    const {name, prority} = req.body
  
  
    // res.send(blanckinput(name, prority))
  
   
    console.log("database a gese ");
    console.log(Boolean(blanckinput(name, prority).name), blanckinput(name, prority));
  
  
    if(blanckinput(name,prority).name || blanckinput(name,prority).prority) {
      res.send(blanckinput(name, prority))
    }else {
      let createproject = new creatprojectSchema({
        name: name,
        prority: prority
      })
      createproject.save()
      res.send(createproject)
    }
  
    
  
    // if(blanckinput(name)){
    //   // res.send("done")
    //   if(blanckinput(prority)){
    //     res.send("prority ace")
    //   }else {
    //     res.send("praority nai")
    //   }
    // }else {
    //   res.send("nam nai")
    // }
  
  
    // if(blanckinput(name) && blanckinput(prority)){
    //   res.send("data ace ")
    // }else {
    //   res.send("please fill the all field")
    // }
  
  
  
    // if(blanckinput(name)){
    //   res.send("name ase ")
    // }else {
    //   res.send({eroor : "name please add value"})
    // }
    // if(blanckinput(prority)){
    //   res.send("prority ase ")
    // }else {
    //   res.send({error : "priority please add value "})
    // }
  
    console.log(name, prority);
    res.send('Hello World POST')
  })





  
module.exports = route