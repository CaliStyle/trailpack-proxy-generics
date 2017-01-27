'use strict'
const joi = require('joi')

// TODO schema
module.exports =  joi.object().keys({
  protocol: joi.string(),
  host: joi.string(),
  reply_to: joi.string(),
  from: joi.object().keys({
    name: joi.string(),
    email: joi.string()
  }),
  to: joi.array().items(joi.object().keys({
    email: joi.string().required(),
    name: joi.string()
  })).min(1).required(),
  subject: joi.string(),
  template_name: joi.string().required(),
  template_content: joi.object().required()
}).unknown()
