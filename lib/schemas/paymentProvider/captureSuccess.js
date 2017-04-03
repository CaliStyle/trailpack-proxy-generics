'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  kind: joi.string().valid('capture'),
  gateway_token: joi.string()
}).unknown()
