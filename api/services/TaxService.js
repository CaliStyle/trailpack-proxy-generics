'use strict'

const Service = require('trails/service')

/**
 * @module TaxService
 * @description Tax Provider Generic
 */
module.exports = class TaxService extends Service {
  /**
   * _init Initializes the Adapter
   * @private
   */
  _init() {
    const Adapter = this.app.config.proxyGeneric.tax_provider.adapter
    return new Adapter(this.app.config.proxyGeneric.tax_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getRate(data){
    const adapter = this._init()
    return adapter.getRate(data)
  }
}

