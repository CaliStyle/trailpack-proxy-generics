'use strict'
const joi = require('joi')

module.exports = joi.object().keys({
  gateway: joi.string().required(),
  foreign_key: joi.any().required(),
  foreign_id: joi.any().required(),
  data: joi.object()
}).unknown()
