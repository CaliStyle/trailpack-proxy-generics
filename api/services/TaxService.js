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
    return new this.app.config.proxyGeneric.tax_provider.adapter(this.app.config.proxyGeneric.tax_provider.options)
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

