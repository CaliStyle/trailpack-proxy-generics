'use strict'
const joi = require('joi')

module.exports =  joi.object().keys({
  foreign_key: joi.any(),
  foreign_id: joi.any().required(),
}).unknown()
