'use strict'

const Trailpack = require('trailpack')
// const _ = require('lodash')
const lib = require('./lib')

module.exports = class ProxyGenericsTrailpack extends Trailpack {

  /**
   * Validates Configs
   */
  validate () {
    if (!this.app.config.proxyGenerics) {
      return Promise.reject(new Error('No configuration found at config.proxyGenerics!'))
    }

    return Promise.all([
      lib.Validator.validateProxyGenericsConfig(this.app.config.proxyGenerics)
    ])
  }

  /**
   * Adds generics' APIs to trails api, Adds generics' routes to app.routes
   */
  configure () {
    return Promise.all([
      lib.ProxyGenerics.loadGenericApis(this.app),
      lib.ProxyGenerics.addRoutes(this.app)
    ])
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

