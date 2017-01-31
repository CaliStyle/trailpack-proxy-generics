'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object()
  .keys({
    latitude: joi.number(),
    longitude: joi.number()
  })
