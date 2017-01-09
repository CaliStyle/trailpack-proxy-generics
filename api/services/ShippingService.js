'use strict'

const Service = require('trails/service')
// const lib = require('../../lib')

/**
 * @module ShippingService
 * @description Shipping Provider Generic
 */
module.exports = class ShippingService extends Service {
  /**
   * _init Initializes the Adapter
   * @private
   */
  _init() {
    const Adapter = this.app.config.proxyGeneric.shipping_provider.adapter
    return new Adapter(this.app.config.proxyGeneric.shipping_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getRates(data){
    const adapter = this._init()
    return adapter.getRate(data)
  }

}

