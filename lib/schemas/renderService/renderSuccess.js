'use strict'
const joi = require('joi')

module.exports =  joi.object().keys({
  document: joi.string().required(),
  meta: joi.object()
}).unknown()
