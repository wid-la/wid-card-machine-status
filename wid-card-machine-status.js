'use strict';

(function () {

  Polymer({

    is: 'wid-card-machine-status',

    behaviors: [Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * Name
       * @type {String}
       */
      name: {
        type: String,
        value: 'Machine'
      },

      /**
       * CPU
       * @type {Number}
       */
      cpu: {
        type: Number,
        value: 0
      },

      /**
       * Status
       * @type {String}
       */
      status: {
        type: String,
        value: 'Status'
      }
    }

  });
})();