'use strict'

module.exports = class Generic  {
  constructor (app) {
    Object.defineProperty(this, 'app', {
      enumerable: false,
      value: app
    })
  }
}
