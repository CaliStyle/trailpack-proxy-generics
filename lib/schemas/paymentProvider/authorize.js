'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  amount: joi.number().required(),
  payment_details: joi.object().keys({
    token: joi.any().required(),
    gateway: joi.string()
  }).required()
}).unknown()
