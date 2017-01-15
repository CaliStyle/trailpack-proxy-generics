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
   *
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  // authorization is the reserving of money that the customer has agreed to pay.
  authorize(transaction, adapter){
    return lib.Validator.paymentProvider.authorize(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.authorize(transaction)
      })
  }
  /**
   *
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  // capture is the transfer of the money that was reserved during the authorization stage.
  capture(transaction, adapter){
    return lib.Validator.paymentProvider.capture(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.capture(transaction)
      })
  }

  /**
   *
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  // sale is a combination of authorization and capture, performed in one step.
  sale(transaction, adapter){
    return lib.Validator.paymentProvider.sale(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sale(transaction)
      })
  }
  /**
   *
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  // void is the cancellation of a pending authorization or capture.
  void(transaction, adapter){
    return lib.Validator.paymentProvider.void(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.void(transaction)
      })
  }
  /**
   *
   * @param transaction
   * @param adapter
   * @returns {Promise}
   */
  // refund is the partial or full refund of the captured money to the sale.
  refund(transaction, adapter){
    return lib.Validator.paymentProvider.refund(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.refund(transaction)
      })
  }
}

