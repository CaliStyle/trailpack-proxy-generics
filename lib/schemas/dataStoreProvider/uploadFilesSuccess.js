'use strict'
const joi = require('joi')
const fileSchema = require('./uploadFileSuccess')
// TODO schema
module.exports =  joi.array().items(fileSchema)
