/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   11/3/14
 */
;
(function () {
  'use strict';

  var klass = require('klass');

  var Injection = klass(function() {
    this.__dependencies = {};
  })
      .methods({
        inject: function(key, obj) {
          this.__dependencies[key] = obj;
        },
        select: function(key) {
          return this.__dependencies[key] || null;
        },
        reject: function(key) {
          delete this.__dependencies[key];
        }
      });

  module.exports = Injection;
})();