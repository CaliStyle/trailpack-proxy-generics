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
  validateDataStoreProvider: {
    upload: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.dataStoreProvider.upload, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    uploadSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.dataStoreProvider.uploadSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    uploadFile: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.dataStoreProvider.uploadFile, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    uploadFileSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.dataStoreProvider.uploadFileSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    uploadFiles: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.dataStoreProvider.uploadFiles, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    uploadFilesSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.dataStoreProvider.uploadFilesSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  },
  validateEmailProvider: {
    send: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.emailProvider.send, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    sendSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.emailProvider.sendSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    sendTemplate: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.emailProvider.sendTemplate, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    sendTemplateSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.emailProvider.sendTemplateSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  },
  validateGeolocationProvider: {
    locate: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.geolocationProvider.locate, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    locateSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.geolocationProvider.locateSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
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
    createCustomer: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.createCustomer, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    createCustomerSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.createCustomerSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    createCustomerSource: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.createCustomerSource, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    createCustomerSourceSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.createCustomerSourceSuccess, (err, value) => {
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
    findCustomer: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.findCustomer, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    findCustomerSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.findCustomerSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    findCustomerSource: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.findCustomerSource, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    findCustomerSourceSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.findCustomerSourceSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getCustomerSources: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.getCustomerSources, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getCustomerSourcesSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.getCustomerSourcesSuccess, (err, value) => {
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
    updateCustomer: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.updateCustomer, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateCustomerSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.updateCustomerSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateCustomerSource: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.updateCustomerSource, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateCustomerSourceSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.paymentProvider.updateCustomerSourceSuccess, (err, value) => {
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
  },
  validateFulfillmentProvider: {
    createOrder: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.createOrder, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    createOrders: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.createOrders, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    createOrderSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.createOrderSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    createOrdersSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.createOrdersSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    destroyOrder: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.destroyOrder, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    destroyOrders: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.destroyOrders, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    destroyOrderSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.destroyOrderSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    destroyOrdersSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.destroyOrdersSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getOrder: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.getOrder, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getOrders: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.getOrders, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getOrderSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.getOrderSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getOrdersSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.getOrdersSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    holdOrder: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.holdOrder, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    holdOrders: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.holdOrders, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    holdOrderSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.holdOrderSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    holdOrdersSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.holdOrdersSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateOrder: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.updateOrder, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateOrders: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.updateOrders, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateOrderSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.updateOrderSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    updateOrdersSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.fulfillmentProvider.updateOrdersSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  },
  validateShippingProvider: {
    validateAddress: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.shippingProvider.validateAddress, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    validateAddressSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.shippingProvider.validateAddressSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getRate: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.shippingProvider.getRate, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getRateSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.shippingProvider.getRateSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getRates: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.shippingProvider.getRates, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getRatesSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.shippingProvider.getRatesSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  },
  validateTaxProvider: {
    getRate: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.taxProvider.getRate, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    getRateSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.taxProvider.getRateSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  },
  validateRenderService: {
    render: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.renderService.render, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    },
    renderSuccess: (config) => {
      return new Promise((resolve, reject) => {
        joi.validate(config, lib.Schemas.renderService.renderSuccess, (err, value) => {
          if (err) {
            return reject(new Errors.ValidationError(err))
          }
          return resolve(value)
        })
      })
    }
  }
}
