'use strict';

(function () {

  Polymer({

    is: 'wid-card-machine-status',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {
      /**
       * Name
       * @type {String}
       */
      name: {
        type: String,
        value: 'Machine Name'
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
    },

    _percentValue: function _percentValue(value) {
      return value + '%';
    }

  });
})();