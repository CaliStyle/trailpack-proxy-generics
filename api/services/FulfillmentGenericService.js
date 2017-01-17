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
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.proxyGenerics.fulfillment_provider.adapter
    return new Adapter(adapter ? adapter.adapter : this.app.config.proxyGenerics.fulfillment_provider.options)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  createOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.createOrder(data)
  }
  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  createOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.createOrders(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  updateOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.updateOrder(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  updateOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.updateOrders(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  destroyOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.destroyOrder(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  destroyOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.destroyOrders(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  getOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.getOrder(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  getOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.getOrders(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  holdOrder(data, adapter){
    adapter = this._init(adapter)
    return adapter.holdOrder(data)
  }

  /**
   *
   * @param data
   * @param adapter
   * @returns {Promise}
   */
  holdOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.holdOrders(data)
  }

}

