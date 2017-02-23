'use strict'
/* global describe, it */
const assert = require('assert')

describe('RenderGenericService', () => {
  let RenderGenericService
  it('should exist', () => {
    assert(global.app.api.services['RenderGenericService'])
    RenderGenericService = global.app.services.RenderGenericService
  })
  it('should render', (done) => {
    RenderGenericService.render('# Look at me as markup!')
      .then(html => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
