'use strict'

module.exports = class Generic  {
  constructor (app) {
    Object.defineProperties(this, {
      app: {
        enumerable: false,
        value: app
      },
      /**
       * If the generic is now immutable
       */
      immutable: {
        enumerable: false,
        value: false,
        writable: true
      },
      /**
       * Freezes the immutability of the generic
       */
      freeze: {
        enumerable: false,
        value: function() {
          this.immutable = true
        },
        writable: true
      },
      /**
       * Unfreezes the immutability of the generic
       */
      unfreeze: {
        enumerable: false,
        value: function() {
          this.immutable = false
        },
        writable: true
      },
    })
  }


  /**
   * Return the id of this generic
   */
  get id () {
    return this.constructor.name.replace(/(\w+)Generic/, '$1').toLowerCase()
  }

  /**
   * Get's the name of the generic class
   */
  get name() {
    return this.constructor.name
  }
}
