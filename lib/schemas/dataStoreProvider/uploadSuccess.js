'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  status: joi.string().required(),
  url: joi.string().required()
})
