'use strict'
/* global describe, it */
const assert = require('assert')

describe('PaymentGenericService', () => {
  let PaymentGenericService
  it('should exist', () => {
    assert(global.app.api.services['PaymentGenericService'])
    PaymentGenericService = global.app.services.PaymentGenericService
  })
  it('should authorize', (done) => {
    PaymentGenericService.authorize({
      payment_details: []
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should capture', (done) => {
    PaymentGenericService.capture({
      payment_details: []
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should sale', (done) => {
    PaymentGenericService.sale({
      payment_details: []
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should void', (done) => {
    PaymentGenericService.void({
      payment_details: []
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should authorize', (done) => {
    PaymentGenericService.refund({
      payment_details: []
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
