'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  kind: joi.string().valid('refund'),
  gateway_token: joi.string()
}).unknown()
