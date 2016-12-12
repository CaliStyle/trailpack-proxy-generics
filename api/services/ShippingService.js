'use strict'

const Service = require('trails/service')

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
    return new this.app.config.proxyGeneric.shipping_provider.adapter(this.app.config.proxyGeneric.shipping_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getRate(data){
    const adapter = this.init()
    return adapter.getRate(data)
  }

}

