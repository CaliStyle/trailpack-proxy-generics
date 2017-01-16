'use strict'
// const _ = require('lodash')
module.exports = class FakeFulfillmentProvider {
  constructor(options) {
    this.options = options
  }

  createOrders(data, adapter){
    return Promise.resolve([])
  }

  updateOrders(data){
    return Promise.resolve([])
  }

  destroyOrders(data){
    return Promise.resolve([])
  }

  getOrders(data){
    return Promise.resolve([])
  }

  holdOrders(data){
    return Promise.resolve([])
  }
}
