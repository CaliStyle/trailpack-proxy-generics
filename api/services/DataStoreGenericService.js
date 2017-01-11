'use strict'

const Service = require('trails/service')
// const lib = require('../../lib')
/**
 * @module DataStoreService
 * @description Data Store Generic
 */
module.exports = class DataStoreService extends Service {
  /**
   * _init Initializes the Adapter
   * @private
   */
  _init() {
    const Adapter = this.app.config.proxyGeneric.data_store_provider.adapter
    return new Adapter(this.app.config.proxyGeneric.data_store_provider.options)
  }

  /**
   *
   * @param files
   * @returns {Promise}
   */
  upload(files) {
    const adapter = this._init()
    return adapter.upload(files)
  }
}

