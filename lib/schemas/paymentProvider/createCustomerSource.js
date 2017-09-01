'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  account_foreign_id: joi.any().required(),
  gateway_token: joi.any().required()
})
