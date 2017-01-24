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
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.tax_provider.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.tax_provider.options)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getRate(data, adapter){
    adapter = this._init(adapter)
    return adapter.getRate(data)
  }
}
