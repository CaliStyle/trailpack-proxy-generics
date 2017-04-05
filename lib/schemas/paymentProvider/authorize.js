'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  amount: joi.number().required(),
  payment_details: joi.object().keys({
    token: joi.any(),
    source: joi.any(),
    gateway: joi.string()
  }).required()
}).unknown()
