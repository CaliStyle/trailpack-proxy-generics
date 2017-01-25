'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  amount: joi.number().required(),
  rate: joi.number().required(),
  title: joi.string().required(),
  tax_details: joi.object()
}).unknown()
