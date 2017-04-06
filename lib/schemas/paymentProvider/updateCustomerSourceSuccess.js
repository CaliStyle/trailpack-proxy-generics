'use strict'
const joi = require('joi')

module.exports =  joi.object().keys({
  gateway: joi.string(),
  account_foreign_key: joi.any().required(),
  account_foreign_id: joi.any().required(),
  foreign_key: joi.any(),
  foreign_id: joi.any().required(),
  payment_details: joi.object()
}).unknown()
