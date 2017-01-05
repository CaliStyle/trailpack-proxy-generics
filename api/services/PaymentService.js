'use strict'

const Service = require('trails/service')
// const lib = require('../../lib')
/**
 * @module PaymentService
 * @description Payment Processor Generic
 */
module.exports = class PaymentService extends Service {
  /**
   * _init Initializes the Adapter
   * @private
   */
  _init() {
    const Adapter = this.app.config.proxyGeneric.payment_processor.adapter
    return new Adapter(this.app.config.proxyGeneric.payment_processor.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  authorize(data){
    const adapter = this._init()
    return adapter.authorize(data)
  }
  /**
   *
   * @param data
   * @returns {Promise}
   */
  capture(data){
    const adapter = this._init()
    return adapter.capture(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  authorizeAndCapture(data){
    const adapter = this._init()
    return adapter.authorizeAndCapture(data)
  }
}

