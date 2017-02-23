'use strict'
const joi = require('joi')

module.exports = joi.object().keys({
  email_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  payment_processor: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  tax_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  shipping_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  fulfillment_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  data_store_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  geolocation_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  image_provider: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown(),
  render_service: joi.object().keys({
    adapter: joi.any().required(),
    options: joi.object()
  }).unknown()
}).unknown()
