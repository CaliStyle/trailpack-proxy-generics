'use strict'

const Service = require('trails/service')
const lib = require('../../lib')

/**
 * @module FulfillmentService
 * @description Fulfillment Provider Generic
 */
module.exports = class FulfillmentGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.fulfillment_provider.adapter
    return new Adapter(adapter ? adapter.options : this.app.config.proxyGenerics.fulfillment_provider.options)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  createOrder(data, adapter){
    return lib.Validator.validateFulfillmentProvider.createOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createOrder(data)
          .then(order => {
            return lib.Validator.validateFulfillmentProvider.createOrderSuccess(order)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  createOrders(data, adapter){
    return lib.Validator.validateFulfillmentProvider.createOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createOrders(data)
          .then(orders => {
            return lib.Validator.validateFulfillmentProvider.createOrdersSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  updateOrder(data, adapter){
    return lib.Validator.validateFulfillmentProvider.updateOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateOrder(data)
          .then(order => {
            return lib.Validator.validateFulfillmentProvider.updateOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  updateOrders(data, adapter){
    return lib.Validator.validateFulfillmentProvider.updateOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateOrders(data)
          .then(orders => {
            return lib.Validator.validateFulfillmentProvider.updateOrdersSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  destroyOrder(data, adapter){
    return lib.Validator.validateFulfillmentProvider.destroyOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.destroyOrder(data)
          .then(order => {
            return lib.Validator.validateFulfillmentProvider.destroyOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  destroyOrders(data, adapter){
    return lib.Validator.validateFulfillmentProvider.destroyOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.destroyOrders(data)
          .then(orders => {
            return lib.Validator.validateFulfillmentProvider.destroyOrdersSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getOrder(data, adapter){
    return lib.Validator.validateFulfillmentProvider.getOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getOrder(data)
          .then(order => {
            return lib.Validator.validateFulfillmentProvider.getOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getOrders(data, adapter){
    return lib.Validator.validateFulfillmentProvider.getOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getOrders(data)
          .then(orders => {
            return lib.Validator.validateFulfillmentProvider.getOrderSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  holdOrder(data, adapter){
    return lib.Validator.validateFulfillmentProvider.holdOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.holdOrder(data)
          .then(order => {
            return lib.Validator.validateFulfillmentProvider.holdOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  holdOrders(data, adapter){
    return lib.Validator.validateFulfillmentProvider.holdOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.holdOrders(data)
          .then(orders => {
            return lib.Validator.validateFulfillmentProvider.holdOrdersSuccess(orders)
          })
      })
  }

}

