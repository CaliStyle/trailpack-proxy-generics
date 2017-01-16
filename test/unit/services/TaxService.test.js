'use strict'
/* global describe, it */
const assert = require('assert')

describe('TaxGenericService', () => {
  let TaxGenericService
  it('should exist', () => {
    assert(global.app.api.services['TaxGenericService'])
    TaxGenericService = global.app.services.TaxGenericService
  })
})
