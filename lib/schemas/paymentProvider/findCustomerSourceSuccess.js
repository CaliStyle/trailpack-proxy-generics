'use strict'
const joi = require('joi')

module.exports = joi.object().keys({
  gateway: joi.string().required(),
  account_foreign_key: joi.any(),
  account_foreign_id: joi.any(),
  foreign_key: joi.any().required(),
  foreign_id: joi.any().required(),
  data: joi.object()
}).unknown()
