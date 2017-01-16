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
  _init(adapter) {
    const Adapter = adapter.adapter || this.app.config.proxyGeneric.payment_processor.adapter
    return new Adapter(adapter.options || this.app.config.proxyGeneric.payment_processor.options)
  }

  /**
   * authorization is the reserving of money that the customer has agreed to pay.
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  authorize(transaction, adapter){
    return lib.Validator.validatePaymentProvider.authorize(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.authorize(transaction)
      })
  }

  /**
   * capture is the transfer of the money that was reserved during the authorization stage.
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  capture(transaction, adapter){
    return lib.Validator.validatePaymentProvider.capture(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.capture(transaction)
      })
  }

  /**
   * sale is a combination of authorization and capture, performed in one step.
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  sale(transaction, adapter){
    return lib.Validator.validatePaymentProvider.sale(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sale(transaction)
      })
  }
  /**
   * void is the cancellation of a pending authorization or capture.
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  void(transaction, adapter){
    return lib.Validator.validatePaymentProvider.void(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.void(transaction)
      })
  }
  /**
   * refund is the partial or full refund of the captured money to the sale.
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  refund(transaction, adapter){
    return lib.Validator.validatePaymentProvider.refund(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.refund(transaction)
      })
  }
}

