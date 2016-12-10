# trailpack-proxy-generics

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## Generic features that require adapters built with love from [Cali-Style](https://cali-style.com)

Generics are common features that every web application needs but implements differently.
For example, Email, Payment Processors, and Fulfillment.

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

[npm-image]: https://img.shields.io/npm/v/trailpack-proxy-generics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-proxy-generics
[ci-image]: https://img.shields.io/travis/CaliStyle/trailpack-proxy-generics/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/CaliStyle/trailpack-proxy-generics
[daviddm-image]: http://img.shields.io/david/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/trailpack-proxy-generics
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/trailpack-proxy-generics.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/trailpack-proxy-generics

