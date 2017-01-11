'use strict'
/* global describe, it */
const assert = require('assert')

describe('PaymentGenericService', () => {
  it('should exist', () => {
    assert(global.app.api.services['PaymentGenericService'])
  })
})
