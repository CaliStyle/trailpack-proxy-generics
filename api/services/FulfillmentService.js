'use strict'

const Service = require('trails/service')

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
    return new this.app.config.proxyGeneric.fulfillment_provider.adapter(this.app.config.proxyGeneric.fulfillment_provider.options)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  createOrders(data){
    const adapter = this.init()
    return adapter.createOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  updateOrders(data){
    const adapter = this.init()
    return adapter.updateOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  destroyOrders(data){
    const adapter = this.init()
    return adapter.destroyOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  getOrders(data){
    const adapter = this.init()
    return adapter.getOrders(data)
  }

  /**
   *
   * @param data
   * @returns {Promise}
   */
  holdOrders(data){
    const adapter = this.init()
    return adapter.holdOrders(data)
  }

}

