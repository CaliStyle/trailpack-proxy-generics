'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  address_1: [joi.string().allow('').optional(), joi.allow(null)],
  address_2: [joi.string().allow('').optional(), joi.allow(null)],
  address_3: [joi.string().allow('').optional(), joi.allow(null)],
  company: [joi.string().allow('').optional(), joi.allow(null)],
  city: joi.string(),
  province: joi.string(),
  province_code: joi.string(),
  country: joi.string(),
  country_code: joi.string(),
  country_name: joi.string(),
  postal_code: joi.string()
}).unknown()