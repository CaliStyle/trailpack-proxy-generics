'use strict'

const Service = require('trails/service')
const lib = require('../../lib')
/**
 * @module PaymentService
 * @description Payment Processor Generic
 */
module.exports = class PaymentGenericService extends Service {
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

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  createCustomer(customer, adapter){
    return lib.Validator.validatePaymentProvider.createCustomer(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createCustomer(customer)
          .then(customer => {
            return lib.Validator.validatePaymentProvider.createCustomerSuccess(customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  findCustomer(customer, adapter){
    return lib.Validator.validatePaymentProvider.findCustomer(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.findCustomer(customer)
          .then(customer => {
            return lib.Validator.validatePaymentProvider.findCustomerSuccess(customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  updateCustomer(customer, adapter){
    return lib.Validator.validatePaymentProvider.updateCustomer(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateCustomer(customer)
          .then(customer => {
            return lib.Validator.validatePaymentProvider.updateCustomerSuccess(customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  createCustomerSource(source, adapter){
    return lib.Validator.validatePaymentProvider.createCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createCustomerSource(source)
          .then(source => {
            return lib.Validator.validatePaymentProvider.createCustomerSourceSuccess(source)
          })
      })
  }
  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  findCustomerSource(source, adapter){
    return lib.Validator.validatePaymentProvider.findCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.findCustomerSource(source)
          .then(source => {
            return lib.Validator.validatePaymentProvider.findCustomerSourceSuccess(source)
          })
      })
  }

  /**
   *
   * @param source
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  updateCustomerSource(source, adapter){
    return lib.Validator.validatePaymentProvider.updateCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateCustomerSource(source)
          .then(source => {
            return lib.Validator.validatePaymentProvider.updateCustomerSourceSuccess(source)
          })
      })
  }
}

