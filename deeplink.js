/**
 * deeplink
 * Author: Tom
 * Github: https://github.com/limomx/deeplink
 * Native: https://github.com/nordnet/cordova-universal-links-plugin
 * MIT License
 */
(function(root, factory) {
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = factory(root, exports);
    }
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function(exports) {
      root.deeplink = factory(root, exports);
    });
  } else {
    root.deeplink = factory(root, {});
  }
}(this, function(root) {
  'use strict';

  var _link = function(domain, options) {
    var opt = options;

    //iOS 9+
    location.href = domain + '?url=' + opt.landing;
  };

  var _set = function(options) {

  };

  return {
    set: _set,
    link: _link
  };
}));
