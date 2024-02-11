const express = require('express')
const route = express.Router()
const baseRouter = require('./api')

const baseapi = '/api/v1'


route.use(baseapi, baseRouter)



module.exports = route