'use strict'
const joi = require('joi')
const fileSchema = require('./uploadFile')
module.exports =  joi.array().items(fileSchema)
