'use strict'

const Service = require('trails/service')
const lib = require('../../lib')

/**
 * @module RenderGenericService
 * @description Render Generic Service
 */
module.exports = class RenderGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.render_service.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.render_service.options)
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  render(data, adapter){
    return lib.Validator.validateRenderService.render(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.render(data)
          .then(html => {
            return lib.Validator.validateRenderService.renderSuccess(html)
          })
      })
  }
}
