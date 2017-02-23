'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('../api'),
  config: {
    main: {
      packs: [
        require('../')
      ]
    },
    proxyGenerics: {
      payment_processor: {
        adapter: require('./fixtures/FakePayment'),
        options: {}
      },
      email_provider: {
        adapter: require('./fixtures/FakeEmail'),
        options: {}
      },
      data_store_provider: {
        adapter: require('./fixtures/FakeDataStore'),
        options: {}
      },
      tax_provider: {
        adapter: require('./fixtures/FakeTax'),
        options: {}
      },
      shipping_provider: {
        adapter: require('./fixtures/FakeShipping'),
        options: {}
      },
      fulfillment_provider: {
        adapter: require('./fixtures/FakeFulfillment'),
        options: {}
      },
      geolocation_provider: {
        adapter: require('./fixtures/FakeGeolocation'),
        options: {}
      },
      render_service: {
        adapter: require('./fixtures/FakeRender'),
        options: {}
      }
    }
  }
}, smokesignals.FailsafeConfig)


