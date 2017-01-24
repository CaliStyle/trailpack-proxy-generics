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
      amount: 100,
      payment_details: {
        token: '123'
      }
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
      authorization: '123'
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
      amount: 100,
      payment_details: {
        token: '123'
      }
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
      authorization: '123'
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should refund', (done) => {
    PaymentGenericService.refund({
      authorization: '123'
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
