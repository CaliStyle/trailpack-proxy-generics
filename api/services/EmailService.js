'use strict'

const Service = require('trails/service')

/**
 * @module EmailService
 * @description Email Generic
 */
module.exports = class EmailService extends Service {
  /**
   * _init Initializes the Adapter
   * @private
   */
  _init() {
    return new this.app.config.proxyGeneric.email_provider.adapter(this.app.config.proxyGeneric.email_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  send(data){
    const adapter = this.init()
    return adapter.send(data)
  }
}

