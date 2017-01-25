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
    TaxGenericService.getRate({
      from_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      to_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      subtotal_price: 1000,
      total_shipping: 1000
    })
      .then(tax => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
