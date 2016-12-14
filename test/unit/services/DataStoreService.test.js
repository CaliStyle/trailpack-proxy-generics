'use strict'
/* global describe, it */
const assert = require('assert')

describe('DataStoreService', () => {
  it('should exist', () => {
    assert(global.app.api.services['DataStoreService'])
  })
})
