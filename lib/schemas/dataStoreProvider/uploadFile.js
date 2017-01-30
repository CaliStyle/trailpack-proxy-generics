'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  src: joi.string().required(),
  url: joi.string()
}).unknown()
