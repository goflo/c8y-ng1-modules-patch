"use strict";function _slicedToArray(r,t){return _arrayWithHoles(r)||_iterableToArrayLimit(r,t)||_unsupportedIterableToArray(r,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,l=r[Symbol.iterator]();!(n=(i=l.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,a=r}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return e}}function _arrayWithHoles(r){if(Array.isArray(r))return r}angular.module("c8y.ui").decorator("uibDropdownDirective",["$delegate",function(r){var o="$$childHead.$$watchers",a="isOpen",i=_slicedToArray(r.filter(function(r){return"UibDropdownController"===r.controller}),1)[0],l=i.link;function t(t,r,e,n){l.apply(i,[t,r,e,n]),t.$on("$destroy",function(){var r=_slicedToArray(_.get(t,o)||[].filter(function(r){return r.exp===a}),1)[0];r&&r.fn(!1,!0)})}return _.assign(i,{compile:function(){return t}}),r}]);