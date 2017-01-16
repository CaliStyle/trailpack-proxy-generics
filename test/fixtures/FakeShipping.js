'use strict'
// const _ = require('lodash')
module.exports = class FakeShippingProvider {
  constructor(options) {
    this.options = options
  }
  getRate(data) {
    return Promise.resolve({})
  }
  getRates(data) {
    return Promise.resolve([])
  }
}
