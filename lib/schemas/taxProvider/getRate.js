'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  from_address: joi.object().keys({
    country_code: joi.string().required(),
    province_code: joi.string().required(),
    postal_code: joi.string().required()
  }).unknown(),
  to_address: joi.object().keys({
    country_code: joi.string().required(),
    province_code: joi.string().required(),
    postal_code: joi.string().required()
  }).unknown(),
  subtotal_price: joi.number().required(),
  total_shipping: joi.number().required(),
  line_items: joi.array().items(joi.object())
})
