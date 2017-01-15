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
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  // authorization is the reserving of money that the customer has agreed to pay.
  authorize(data, adapter){
    return lib.Validator.paymentProvider.authorize(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.authorize(data)
      })
  }
  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  // capture is the transfer of the money that was reserved during the authorization stage.
  capture(data, adapter){
    return lib.Validator.paymentProvider.capture(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.capture(data)
      })
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  // sale is a combination of authorization and capture, performed in one step.
  sale(data, adapter){
    return lib.Validator.paymentProvider.sale(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sale(data)
      })
  }
  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  // void is the cancellation of a pending authorization or capture.
  void(data, adapter){
    return lib.Validator.paymentProvider.void(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.void(data)
      })
  }
  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  // refund is the partial or full refund of the captured money to the sale.
  refund(data, adapter){
    return lib.Validator.paymentProvider.refund(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.refund(data)
      })
  }
}

