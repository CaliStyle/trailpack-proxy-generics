'use strict'

const Service = require('trails/service')

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
    const Adapter = this.app.config.proxyGeneric.datastore_provider.adapter
    return new Adapter(this.app.config.proxyGeneric.datastore_provider.options)
  }
  upload(files) {
    const adapter = this._init()
    return adapter.upload(files)
  }
}

