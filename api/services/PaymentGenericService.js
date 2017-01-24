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
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.payment_processor.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.payment_processor.options)
  }

  /**
   * authorization is the reserving of money that the customer has agreed to pay.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  authorize(transaction, adapter){
    return lib.Validator.validatePaymentProvider.authorize(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.authorize(transaction)
          .then(transaction => {
            return lib.Validator.validatePaymentProvider.authorizeSuccess(transaction)
          })
      })
  }

  /**
   * capture is the transfer of the money that was reserved during the authorization stage.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  capture(transaction, adapter){
    return lib.Validator.validatePaymentProvider.capture(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.capture(transaction)
          .then(transaction => {
            return lib.Validator.validatePaymentProvider.captureSuccess(transaction)
          })
      })
  }

  /**
   * sale is a combination of authorization and capture, performed in one step.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  sale(transaction, adapter){
    return lib.Validator.validatePaymentProvider.sale(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sale(transaction)
          .then(transaction => {
            return lib.Validator.validatePaymentProvider.saleSuccess(transaction)
          })
      })
  }
  /**
   * void is the cancellation of a pending authorization or capture.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  void(transaction, adapter){
    return lib.Validator.validatePaymentProvider.void(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.void(transaction)
          .then(transaction => {
            return lib.Validator.validatePaymentProvider.voidSuccess(transaction)
          })
      })
  }
  /**
   * refund is the partial or full refund of the captured money to the sale.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  refund(transaction, adapter){
    return lib.Validator.validatePaymentProvider.refund(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.refund(transaction)
          .then(transaction => {
            return lib.Validator.validatePaymentProvider.refundSuccess(transaction)
          })
      })
  }
}

