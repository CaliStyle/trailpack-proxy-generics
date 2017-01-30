'use strict'
const joi = require('joi')
const fileSchema = require('./uploadFileSuccess')

module.exports =  joi.array().items(fileSchema)
