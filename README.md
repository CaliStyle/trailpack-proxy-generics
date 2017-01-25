# trailpack-proxy-generics

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## Generic features that require adapters built with love from [Cali-Style](https://cali-style.com)

Generics are common features that every web application needs but implements differently. The result of a Generic is a normalized way of handling these different services.
For example: Email Provider, Payment Processors, Tax Provider, Shipping Provider, Fulfillment, Geolocation, whatever you need!

Can you think of a generic we missed? Create a PR!

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

```js
// config/proxyGenerics.js
module.exports = {
  // ... any generic
  payment_processor: {
      adapter: require('<adpater>'),
      options: {
          whatever_key: '<what ever you need here>'
      }
  }
}
```

## Currently Supported Generics
### Email Provider (TODO)
The Email Provider handles sending emails from different email providers eg. Mandrill, MailGun

#### EmailGenericService.send
#### EmailGenericService.sendTemplate
#### Creating an Email Provider Generic

### Geolocation Provider (TODO)
The Geolocation Provider handles resolving geography

#### GeolocationGenericService.locate

#### Creating a Geolocation Provider Generic

### Payment Processor
The Payment Processor handles payments from different merchant processors/terminals eg. Stripe, Authorize.net.

#### PaymentGenericService.authorize
#### PaymentGenericService.capture
#### PaymentGenericService.sale
#### PaymentGenericService.void
#### PaymentGenericService.refund

#### Supported Payment Processors
* [Stripe](https://github.com/CaliStyle/proxy-generics-stripe)

#### Creating a Payment Processor Generic

### Tax Provider
The Tax Provider handles sales tax for items sold from different tax providers eg. TaxBundle

#### TaxGenericService.getRate

#### Creating a Tax Provider Generic

#### Supported Tax Providers
* [Taxjar](https://github.com/CaliStyle/proxy-generics-taxjar)

### Shipping Provider (TODO)
The Shipping Provider handles shipping rates from a location to a destination from different shipping providers eg. Shipstation, USPS, FedEx, UPS

#### ShippingGenericService.getRate

#### ShippingGenericService.getRates

#### Creating a Shipping Provider Generic

#### Supported Shipping Providers
* [Shippo](https://github.com/CaliStyle/proxy-generics-shippo)
* [Shipstation](https://github.com/CaliStyle/proxy-generics-shipstation)



### Fulfillment Provider (TODO)
The Fulfillment Provider handles fulfillment events from a location to a destination from different fulfillment providers eg. Shipstation

#### FulfillmentGenericService.createOrders

#### FulfillmentGenericService.updateOrders

#### FulfillmentGenericService.destroyOrders

#### FulfillmentGenericService.getOrders

#### FulfillmentGenericService.holdOrders

#### Creating a Fulfillment Provider Generic

#### Supported Fulfillment Providers
* [Shippo](https://github.com/CaliStyle/proxy-generics-shippo)
* [Shipstation](https://github.com/CaliStyle/proxy-generics-shipstation)

### Data Store Provider (TODO)
The Data Store provider handles uploads and downloads to a remote data store eg. AWS, Gcloud
#### DataStoreGenericService.upload
#### Creating a Data Store Provider Plugin


[npm-image]: https://img.shields.io/npm/v/trailpack-proxy-generics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-proxy-generics
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/trailpack-proxy-generics/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/trailpack-proxy-generics/tree/master
[daviddm-image]: http://img.shields.io/david/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/trailpack-proxy-generics
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/trailpack-proxy-generics

