'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  formatted_address: joi.string(),
  latitude: joi.number(),
  longitude: joi.number()
}).unknown()
