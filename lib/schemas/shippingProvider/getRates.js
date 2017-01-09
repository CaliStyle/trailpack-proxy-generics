'use strict'
const joi = require('joi')

module.exports = joi.object().keys({
  origin: joi.object(),
  destination: joi.object(),
  items: joi.array(),
  currency: joi.string()
})
