'use strict'
const joi = require('joi')

module.exports =  joi.array().items(joi.object().keys({
  order_id: joi.number(),
  order_items: joi.array()
}).unknown())
