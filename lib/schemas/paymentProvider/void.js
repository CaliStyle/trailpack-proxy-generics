'use strict'
const joi = require('joi')

// TODO schema
module.exports = joi.object().keys({
  authorization: joi.any().required()
}).unknown()
