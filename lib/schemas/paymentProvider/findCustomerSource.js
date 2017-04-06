'use strict'
const joi = require('joi')

module.exports =  joi.object().keys({
  account_foreign_key: joi.any(),
  account_foreign_id: joi.any().required(),
  foreign_key: joi.any(),
  foreign_id: joi.any().required(),
}).unknown()
