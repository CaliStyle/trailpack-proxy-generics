'use strict'

const Service = require('trails/service')
const lib = require('../../lib')

/**
 * @module ShippingService
 * @description Shipping Provider Generic
 */
module.exports = class ShippingService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.shipping_provider.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.shipping_provider.options)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  validateAddress(data, adapter){
    return lib.Validator.validateShippingProvider.validateAddress(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.validateAddress(data)
          .then(address => {
            return lib.Validator.validateShippingProvider.validateAddressSuccess(address)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getRate(data, adapter){
    return lib.Validator.validateShippingProvider.getRate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getRate(data)
          .then(rate => {
            return lib.Validator.validateShippingProvider.getRateSuccess(rate)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getRates(data, adapter){
    return lib.Validator.validateShippingProvider.getRates(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getRates(data)
          .then(rates => {
            return lib.Validator.validateShippingProvider.getRatesSuccess(rates)
          })
      })
  }
}
