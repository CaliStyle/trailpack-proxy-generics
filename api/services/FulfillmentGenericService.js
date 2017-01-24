'use strict'

const Service = require('trails/service')
// const lib = require('../../lib')

/**
 * @module FulfillmentService
 * @description Fulfillment Provider Generic
 */
module.exports = class FulfillmentService extends Service {
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
    adapter = this._init(adapter)
    return adapter.createOrder(data)
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  createOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.createOrders(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  updateOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.updateOrder(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  updateOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.updateOrders(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  destroyOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.destroyOrder(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  destroyOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.destroyOrders(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.getOrder(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.getOrders(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  holdOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.holdOrder(data)
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  holdOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.holdOrders(data)
  }

}

