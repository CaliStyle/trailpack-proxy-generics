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
  holdOrders(data, adapter){
    adapter = this._init(adapter)
    return adapter.holdOrders(data)
  }

}

