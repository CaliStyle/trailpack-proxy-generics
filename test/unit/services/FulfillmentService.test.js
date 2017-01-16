'use strict'
/* global describe, it */
const assert = require('assert')

describe('FulfillmentGenericService', () => {
  let FulfillmentGenericService
  it('should exist', () => {
    assert(global.app.api.services['FulfillmentGenericService'])
    FulfillmentGenericService = global.app.services.FulfillmentGenericService
  })
})
