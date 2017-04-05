'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  kind: joi.string().valid('void'),
  gateway_token: joi.string(),
  gateway_source: joi.any()
}).unknown()
