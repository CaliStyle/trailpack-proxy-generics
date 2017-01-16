'use strict'
/* global describe, it */
const assert = require('assert')

describe('TaxGenericService', () => {
  let TaxGenericService
  it('should exist', () => {
    assert(global.app.api.services['TaxGenericService'])
    TaxGenericService = global.app.services.TaxGenericService
  })
  it('should get rate', (done) => {
    TaxGenericService.getRate({})
      .then(tax => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
