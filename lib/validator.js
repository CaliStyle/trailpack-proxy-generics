'use sticy'
const joi = require('joi')
const lib = require('.')
// const errors = require('./errors')

module.exports = {
  validateProxyGenericsConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, lib.Schemas.proxyGenericsConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.proxyGenerics: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
