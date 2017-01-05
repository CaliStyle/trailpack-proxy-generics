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
  _init() {
    const Adapter = this.app.config.proxyGeneric.fulfillment_provider.adapter
    return new Adapter(this.app.config.proxyGeneric.fulfillment_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  createOrders(data){
    const adapter = this._init()
    return adapter.createOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  updateOrders(data){
    const adapter = this._init()
    return adapter.updateOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  destroyOrders(data){
    const adapter = this._init()
    return adapter.destroyOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getOrders(data){
    const adapter = this._init()
    return adapter.getOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  holdOrders(data){
    const adapter = this._init()
    return adapter.holdOrders(data)
  }

}

