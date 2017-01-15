'use strict'

const Service = require('trails/service')
// const lib = require('../../lib')

/**
 * @module TaxService
 * @description Tax Provider Generic
 */
module.exports = class TaxService extends Service {
  /**
   * _init Initializes the Adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter.adapter || this.app.config.proxyGeneric.tax_provider.adapter
    return new Adapter(adapter.options || this.app.config.proxyGeneric.tax_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getRate(data, adapter){
    adapter = this._init(adapter)
    return adapter.getRate(data)
  }
}
