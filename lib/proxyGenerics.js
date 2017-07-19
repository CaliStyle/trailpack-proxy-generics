/* eslint no-console: [0] */
'use strict'

// const lib = require('./')
const _ = require('lodash')
const routeOrder = require('trailpack-proxy-engine/lib/utils').routeOrder
const trailsCore = require('trails/lib').Core

module.exports = {
  /**
   * configure - Configure the Proxy Engine
   * @param app
   */
  configure: (app) => {

    // Define New properties on app
    Object.defineProperties(app, {
      emails: {
        enumerable: true,
        writable: false,
        value: {}
      }
    })

    // Bind the Methods
    Object.assign(app.emails, trailsCore.bindMethods(app, 'emails'))

    return
  },
  /**
   * Add Generics APIs
   * @param app
   * @returns {Promise.<T>}
   */
  loadGenericApis: (app) => {
    const apisToMerge = []
    const generics = _.get(app.config, 'proxyGenerics')
    _.each(generics, generic => {
      const api = _.get(generic, 'api')
      if (api) {
        apisToMerge.push(api)
      }
    })
    app.api = _.defaultsDeep({}, app.api, apisToMerge)
    return Promise.resolve()
  },
  /**
   * Add Generics Routes
   * @param app
   * @returns {Promise.<{}>}
   */
  addRoutes: (app) => {
    const prefix = _.get(app.config, 'proxyCart.prefix') || _.get(app.config, 'footprints.prefix')
    const routerUtil = app.packs.router.util
    let routesToMerge = []
    const generics = _.get(app.config, 'proxyGenerics')
    _.each(generics, generic => {
      const routes = _.get(generic, 'routes')
      if (routes) {
        console.log(routes)
        routesToMerge = routesToMerge.concat(routes)
      }
    })

    if (prefix){
      routesToMerge.forEach(route => {
        route.path = prefix + route.path
      })
    }
    app.config.routes = routerUtil.mergeRoutes(routesToMerge, app.config.routes)
    app.config.routes.sort(routeOrder({order: 'asc'}))
    return Promise.resolve({})
  }
}
