'use strict'

const Service = require('trails/service')
const lib = require('../../lib')
/**
 * @module DataStoreService
 * @description Data Store Generic
 */
module.exports = class DataStoreService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
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

    return lib.Validator.validateDataStoreProvider.upload(buffer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.upload(buffer)
          .then(response => {
            return lib.Validator.validateDataStoreProvider.uploadSuccess(response)
          })
      })
  }

  /**
   *
   * @param file
   * @param adapter
   * @returns {*}
   */
  uploadFile(file, adapter) {

    return lib.Validator.validateDataStoreProvider.uploadFile(file)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.uploadFile(file)
          .then(response => {
            return lib.Validator.validateDataStoreProvider.uploadFileSuccess(response)
          })
      })
  }

  /**
   *
   * @param files
   * @param adapter
   * @returns {*}
   */
  uploadFiles(files, adapter) {
    return lib.Validator.validateDataStoreProvider.uploadFiles(files)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.uploadFiles(files)
          .then(responses => {
            return lib.Validator.validateDataStoreProvider.uploadFilesSuccess(responses)
          })
      })
  }
}

