'use strict'
/* global describe, it */
const assert = require('assert')

describe('ShippingGenericService', () => {
  let ShippingGenericService
  it('should exist', () => {
    assert(global.app.api.services['ShippingGenericService'])
    ShippingGenericService = global.app.services.ShippingGenericService
  })
})
