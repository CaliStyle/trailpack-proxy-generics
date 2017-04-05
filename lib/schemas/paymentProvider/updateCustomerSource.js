'use strict'
const joi = require('joi')

module.exports =  joi.object().keys({
  account_foreign_id: joi.any().required(),
  foreign_id: joi.any().required(),
}).unknown()
