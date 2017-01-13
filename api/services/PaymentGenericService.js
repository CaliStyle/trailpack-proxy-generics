'use strict'

const Service = require('trails/service')
const lib = require('../../lib')
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
  // authorization is the reserving of money that the customer has agreed to pay.
  authorize(data){
    return lib.Validator.paymentProvider.authorize(data)
      .then(values => {
        const adapter = this._init()
        return adapter.authorize(data)
      })
  }
  /**
   *
   * @param data
   * @returns {Promise}
   */
  // capture is the transfer of the money that was reserved during the authorization stage.
  capture(data){
    return lib.Validator.paymentProvider.capture(data)
      .then(values => {
        const adapter = this._init()
        return adapter.capture(data)
      })
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  // sale is a combination of authorization and capture, performed in one step.
  sale(data){
    return lib.Validator.paymentProvider.sale(data)
      .then(values => {
        const adapter = this._init()
        return adapter.sale(data)
      })
  }
  /**
   *
   * @param data
   * @returns {Promise}
   */
  // void is the cancellation of a pending authorization or capture.
  void(data){
    return lib.Validator.paymentProvider.void(data)
      .then(values => {
        const adapter = this._init()
        return adapter.void(data)
      })
  }
  /**
   *
   * @param data
   * @returns {Promise}
   */
  // refund is the partial or full refund of the captured money to the sale.
  refund(data){
    return lib.Validator.paymentProvider.refund(data)
      .then(values => {
        const adapter = this._init()
        return adapter.refund(data)
      })
  }
}

