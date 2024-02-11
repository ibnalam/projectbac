const express = require('express')
const route = express.Router()
const postroute = require("./postroute.js")
const getroute = require("./getroute.js")
const updateroute = require("./updateroute.js")
const deleteroute = require("./daleteroute.js")


 

route.use("/post", postroute)
route.use("/getdata", getroute)
route.use("/update", updateroute)
route.use("/delete", deleteroute)






module.exports = route