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
  _init(adapter) {
    const Adapter = adapter.adapter || this.app.config.proxyGeneric.shipping_provider.adapter
    return new Adapter(adapter.options || this.app.config.proxyGeneric.shipping_provider.options)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  getRates(data, adapter){
    adapter = this._init(adapter)
    return adapter.getRate(data)
  }

}

