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
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.data_store_provider.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.data_store_provider.options)
  }

  /**
   *
   * @param files
   * @param adapter
   * @returns {Promise}
   */
  upload(buffer, adapter) {
    adapter = this._init(adapter)
    return adapter.upload(buffer)
  }

  /**
   *
   * @param file
   * @param adapter
   * @returns {*}
   */
  uploadFile(file, adapter) {
    adapter = this._init(adapter)
    return adapter.uploadFile(file)
  }

  /**
   *
   * @param files
   * @param adapter
   * @returns {*}
   */
  uploadFiles(files, adapter) {
    adapter = this._init(adapter)
    return adapter.uploadFiles(files)
  }
}

