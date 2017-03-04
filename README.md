# trailpack-proxy-generics

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## An adapter protocol for common functions, built with love from [Cali-Style](https://cali-style.com)

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)

Generics are common features that web applications need but implement differently. The result of a Generic is a normalized way of handling these different services.

A generic is a great way to implement 3rd parties. You can write your application to implement a single service but easily swap out the the 3rd party.

Current Generics: Email Provider, Payment Processors, Tax Provider, Shipping Provider, Fulfillment, Geolocation, Image Manipulation, HTML rendering, whatever you need!

Can you think of a generic or method we missed? Create a PR!

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
      adapter: require('<adapter>'),
      options: {
          whatever_key: '<what ever you need here>'
      }
  }
}
```

## Usage
Many different modules in Proxy Engine will rely on a generic to complete a task. Generics are easy to create and use.

### Validation
Every Generic call is validated twice: 

- When data is passed to the generic.
- When there is a successful response from the generic.

This allows for generics to stay consistent with their requests and responses.

## Currently Supported Generics
### Email Provider
The Email Provider handles sending emails from different email providers eg. Mandrill, MailGun

#### EmailGenericService.send
Sends an Email

#### EmailGenericService.sendTemplate
Sends an Email Template

#### Creating an Email Provider Generic

#### Supported Email Providers
* [Mandrill](https://github.com/CaliStyle/proxy-generics-mandrill)

### Geolocation Provider
The Geolocation Provider handles resolving geography

#### GeolocationGenericService.locate
Resolves the geolocation of an address, validates an address, normalizes an address.

#### Creating a Geolocation Provider Generic

#### Supported Geolocation Providers
* [Google Maps](https://github.com/calistyle/proxy-generics-google-maps)

### Payment Processor
The Payment Processor handles payments from different merchant processors/terminals eg. Stripe, Authorize.net.

#### PaymentGenericService.authorize
Authorizes a purchase

#### PaymentGenericService.capture
Captures an authorized purchase

#### PaymentGenericService.sale
Authorizes and captures a purchase

#### PaymentGenericService.void
Voids an authorized purchase

#### PaymentGenericService.refund
Partially Refunds/Refunds a purchase

#### Creating a Payment Processor Generic

#### Supported Payment Processors
* [Stripe](https://github.com/CaliStyle/proxy-generics-stripe)
* [Authorize.net](https://github.com/CaliStyle/proxy-generics-authorize-net)

### Tax Provider
The Tax Provider handles sales tax for items sold from different tax providers eg. TaxBundle

#### TaxGenericService.getRate
Gets the tax rate for a purchase.

#### Creating a Tax Provider Generic

#### Supported Tax Providers
* [Taxjar](https://github.com/CaliStyle/proxy-generics-taxjar)

### Shipping Provider (TODO)
The Shipping Provider handles shipping rates from a location to a destination from different shipping providers eg. Shipstation, USPS, FedEx, UPS

#### ShippingGenericService.getRate
Gets a single carrier rate.

#### ShippingGenericService.getRates
Gets all carrier rates

#### Creating a Shipping Provider Generic

#### Supported Shipping Providers
* [Shippo](https://github.com/CaliStyle/proxy-generics-shippo)
* [Shipstation](https://github.com/CaliStyle/proxy-generics-shipstation)


### Fulfillment Provider (TODO)
The Fulfillment Provider handles fulfillment events from a location to a destination from different fulfillment providers eg. Shipstation

#### FulfillmentGenericService.createOrder
Creates an order in fulfillment

#### FulfillmentGenericService.createOrders
Creates multiple orders in fulfillment

#### FulfillmentGenericService.updateOrder
Updates an order in fulfillment

#### FulfillmentGenericService.updateOrders
Updates multiple orders in fulfillment

#### FulfillmentGenericService.destroyOrder
Destroys an order in fulfillment

#### FulfillmentGenericService.destroyOrders
Destroys multiple orders in fulfillment

#### FulfillmentGenericService.getOrder
Retrieves an order in fulfillment

#### FulfillmentGenericService.getOrders
Retrieves multiple orders in fulfillment

#### FulfillmentGenericService.holdOrder
Creates an order hold in fulfillment

#### FulfillmentGenericService.holdOrders
Creates multiple order holds in fulfillment

#### Creating a Fulfillment Provider Generic

#### Supported Fulfillment Providers
* [Shippo](https://github.com/CaliStyle/proxy-generics-shippo)
* [Shipstation](https://github.com/CaliStyle/proxy-generics-shipstation)

### Data Store Provider
The Data Store provider handles uploads and downloads to a remote data store eg. AWS, Gcloud

#### DataStoreGenericService.upload
Uploads a buffer to a data store

#### DataStoreGenericService.uploadFile
Uploads a file to a data store

#### DataStoreGenericService.uploadFiles
Uploads files to a data store

#### Creating a Data Store Provider Plugin

#### Supported Data Store Providers
 * [Gcloud](https://github.com/CaliStyle/proxy-generics-glcoud)

### Image Provider
Handles image manipulation

#### Creating an Image Provider Plugin

### Render Service
Handles rendering of html and Metadata

#### RenderGenericService.render
Render a markdown/html string into HTML and returns YAML metadata as object
```js
{
    document: '<h1>Hello World</h1>'
    meta: {
      key: 'Look at Me!'
    }
}
```

#### Creating an Render Service Plugin

#### Supported Render Services
* [Render](https://github.com/CaliStyle/proxy-generics-render)


[npm-image]: https://img.shields.io/npm/v/trailpack-proxy-generics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-proxy-generics
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/trailpack-proxy-generics/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/trailpack-proxy-generics/tree/master
[daviddm-image]: http://img.shields.io/david/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/trailpack-proxy-generics
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/trailpack-proxy-generics

