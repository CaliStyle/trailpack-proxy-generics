'use strict'

const Service = require('trails/service')
// const lib = require('../../lib')
/**
 * @module ImageGenericService
 * @description Image Generic Service
 */
module.exports = class ImageGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.image_processor.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.image_processor.options)
  }
}

