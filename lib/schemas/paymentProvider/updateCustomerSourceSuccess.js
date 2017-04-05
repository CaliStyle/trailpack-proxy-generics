'use strict'
const joi = require('joi')

module.exports =  joi.object().keys({
  gateway: joi.string(),
  foreign_key: joi.any(),
  foreign_id: joi.any(),
  data: joi.object()
}).unknown()
