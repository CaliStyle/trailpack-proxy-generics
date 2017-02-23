'use strict'
const joi = require('joi')

module.exports = joi.object().keys({
  email_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  payment_processor: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  tax_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  shipping_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  fulfillment_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  data_store_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  geolocation_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  image_provider: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  }),
  render_service: joi.object().keys({
    adapter: joi.any(),
    options: joi.object()
  })
}).unknown()
