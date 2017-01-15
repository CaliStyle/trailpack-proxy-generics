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
  _init(adapter) {
    const Adapter = adapter.adapter || this.app.config.proxyGeneric.data_store_provider.adapter
    return new Adapter(adapter.options || this.app.config.proxyGeneric.data_store_provider.options)
  }

  /**
   *
   * @param files
   * @param adapter
   * @returns {Promise}
   */
  upload(files, adapter) {
    adapter = this._init(adapter)
    return adapter.upload(files)
  }
}

