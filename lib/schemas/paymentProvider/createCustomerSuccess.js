'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  gateway: joi.string(),
  data: joi.object()
}).unknown()
