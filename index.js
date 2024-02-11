const express = require('express')
const mongoConfig = require('./dbConfig/mongoConfig')
const app = express()
const route = require("./routes")
const sequrepost = require('./middleware/sequrepost')
const blanckinput = require('./middleware/helpers/blanckinput.js')
// const CreateprojectSchema = require('./model/creatprojectSchema.js')
const creatprojectSchema = require('./model/creatprojectSchema.js')


// express json middleware 
app.use(express.json())

// mongo db connect 
mongoConfig()

// route middleware
app.use(route)




// port 
app.listen(3000,()=> {
    console.log("port connected");
})






//ibnalam
// yLLspPxyApPjHZW6  