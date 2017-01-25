'use strict'
/* global describe, it */
const assert = require('assert')

describe('GeolocationGenericService', () => {
  let GeolocationGenericService
  it('should exist', () => {
    assert(global.app.api.services['GeolocationGenericService'])
    GeolocationGenericService = global.app.services.GeolocationGenericService
  })
  it('should create an order', (done) => {
    GeolocationGenericService.locate({})
      .then(response => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
