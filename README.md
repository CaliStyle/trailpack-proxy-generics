# trailpack-proxy-generics

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## Generic features that require adapters built with love from [Cali-Style](https://cali-style.com)

Generics are common features that every web application needs but implements differently. The result of a Generic is a normalized way of handeling these different services.
For example: Email, Payment Processors, Tax Provider, Shipping Provider, and Fulfillment.

## Install

```sh
$ npm install --save trailpack-proxy-generics
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-proxy-generics')
  ]
}
```

## Currently Supported Generics
### Email Provider (TODO)
The Email Provider handles sending emails from different email providers eg. Mandrill, MailGun

#### EmailGenericService.send
#### EmailGenericService.sendTemplate
#### Creating an Email Provider Plugin

### Payment Processor (TODO)
The Payment Processor handles payments from different merchant processors/terminals eg. Stripe, Authorize.net.
#### PaymentGenericService.authorize
#### PaymentGenericService.capture
#### PaymentGenericService.sale
#### PaymentGenericService.void
#### PaymentGenericService.refund
#### Creating a Payment Processor Plugin

### Tax Provider (TODO)
The Tax Provider handles sales tax for items sold from different tax providers eg. TaxBundle
#### TaxGenericService.getRate
#### Creating a Tax Provider Plugin

### Shipping Provider (TODO)
The Shipping Provider handles shipping rates from a location to a destination from different shipping providers eg. Shipstation, USPS, FedEx, UPS
#### ShippingGenericService.getRates
#### Creating a Shipping Provider Plugin

### Fulfillment Provider (TODO)
The Fulfillment Provider handles fulfillment events from a location to a destination from different fulfillment providers eg. Shipstation
#### FulfillmentGenericService.createOrders
#### FulfillmentGenericService.updateOrders
#### FulfillmentGenericService.destroyOrders
#### FulfillmentGenericService.getOrders
#### FulfillmentGenericService.holdOrders
#### Creating a Fulfillment Provider Plugin

### Data Store Provider (TODO)
The Data Store provider handles uploads and downloads to a remote data store eg. AWS, Gcloud
#### DataStoreGenericService.upload
#### Creating a Data Store Provider Plugin


[npm-image]: https://img.shields.io/npm/v/trailpack-proxy-generics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-proxy-generics
[ci-image]: https://img.shields.io/travis/CaliStyle/trailpack-proxy-generics/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/CaliStyle/trailpack-proxy-generics
[daviddm-image]: http://img.shields.io/david/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/trailpack-proxy-generics
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/trailpack-proxy-generics

