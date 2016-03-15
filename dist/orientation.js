;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Orientation = factory();
  }
}(this, function() {
var LANDSCAPE = 'landscape',
    PORTRAIT = 'portrait';

var bodyClass = document.body.classList;

var Orientation = {
    isPortrait: function () {
        return !this.isLandscape();
    },
    isLandscape: function () {
        return window.orientation === 90 || window.orientation === -90;
    },
    detectOrientation: function () {
        if (Orientation.isLandscape()) {
            bodyClass.add(LANDSCAPE);
            bodyClass.remove(PORTRAIT);
        } else {
            bodyClass.add(PORTRAIT);
            bodyClass.remove(LANDSCAPE);
        }
    }
};

Orientation.detectOrientation();
window.addEventListener("orientationchange", Orientation.detectOrientation);

return Orientation;
}));
