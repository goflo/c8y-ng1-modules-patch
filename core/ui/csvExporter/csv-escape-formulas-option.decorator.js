"use strict";!function(){function n(n){var e=["+","-","=","|","'",",","@"],i=angular.bind(n,n.stringifyField);return n.stringifyField=function(n,r){var t=n;return!0===_.get(r,"escapeFormulas",!1)&&(t=function(n){if(!_.isString(n))return n;var r=function(r){return _.some(e,function(n){return _.includes(r,n)})}(n)?"'":"";return"".concat(r).concat(n)}(n)),i(t,r)},n}n.$inject=["$delegate"],angular.module("c8y.ui").decorator("CSV",n)}();