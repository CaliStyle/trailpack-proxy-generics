'use strict'

const Service = require('trails/service')
const lib = require('../../lib')

/**
 * @module EmailService
 * @description Email Generic
 */
module.exports = class EmailService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.email_provider.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.email_provider.options)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  send(data, adapter){
    return lib.Validator.validateEmailProvider.send(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.send(data)
          .then(response => {
            return lib.Validator.validateEmailProvider.sendSuccess(response)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  sendTemplate(data, adapter){
    return lib.Validator.validateEmailProvider.sendTemplate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sendTemplate(data)
          .then(response => {
            return lib.Validator.validateEmailProvider.sendTemplateSuccess(response)
          })
      })
  }
}

