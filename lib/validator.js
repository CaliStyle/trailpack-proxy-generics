'use sticy'
const joi = require('joi')
const lib = require('.')
const Errors = require('proxy-engine-errors')


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
  },
  validatePaymentProvider: {
    authorize: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.authorize, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    authorizeSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.authorizeSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    capture: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.capture, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    captureSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.captureSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    sale: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.sale, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    saleSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.saleSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    void: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.void, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    voidSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.voidSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    refund: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.refund, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    refundSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.refundSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  }
}
