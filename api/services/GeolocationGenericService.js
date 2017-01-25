'use strict'

const Service = require('trails/service')
const lib = require('../../lib')
/**
 * @module GeolocationGenericService
 * @description Geolocation Generic Service
 */
module.exports = class GeolocationGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.geolocation_provider.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.geolocation_provider.options)
  }

  /**
   * Geo locate an address
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  locate(data, adapter) {
    return lib.Validator.validateGeolocationProvider.locate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.locate(data)
          .then(response => {
            return lib.Validator.validateGeolocationProvider.locateSuccess(response)
          })
      })
  }
}
