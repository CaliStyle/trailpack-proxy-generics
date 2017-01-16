'use strict'
/* global describe, it */
const assert = require('assert')

describe('EmailGenericService', () => {
  let EmailGenericService
  it('should exist', () => {
    assert(global.app.api.services['EmailGenericService'])
    EmailGenericService = global.app.services.EmailGenericService
  })
  it('should send', (done) => {
    EmailGenericService.send({})
      .then(email => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should send template', (done) => {
    EmailGenericService.sendTemplate({})
      .then(email => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
