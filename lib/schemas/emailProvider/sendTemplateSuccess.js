'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.array().items(joi.object().keys({
  email: joi.string().required(),
  status: joi.string().required()
}).unknown())
