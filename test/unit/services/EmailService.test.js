'use strict'
/* global describe, it */
const assert = require('assert')

describe('EmailGenericService', () => {
  let EmailGenericService
  it('should exist', () => {
    assert(global.app.api.services['EmailGenericService'])
    EmailGenericService = global.app.services.EmailGenericService
  })
})
