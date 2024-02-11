const mongoose = require("mongoose")
const {Schema} = mongoose
const creatprojectSchema = new Schema({
    name:{
        type: String
    },
    prority:{
        type: String
    }
})




module.exports = mongoose.model("projectcollection", creatprojectSchema)

