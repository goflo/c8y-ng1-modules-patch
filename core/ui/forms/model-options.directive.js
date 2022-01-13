"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(){function n(l,m){return{restrict:"A",require:"ngModel",link:function(r,n,t,e){var o=[{name:"preserveNumericStrings",mutualExclusionGroup:"numericStrings",formatter:function(n){var r=n;return a(["number","string"],r),s()||(r=parseFloat(n)),r},parser:function(n){var r=n;return a(["number","string"],r),f(r)?r="":("string"==typeof e.$modelValue||s())&&(r="".concat(r)),r}},{name:"convertNumericStrings",mutualExclusionGroup:"numericStrings",formatter:function(n){var r=n;return a(["number","string"],r),"string"==typeof r?r=parseFloat(r):s()&&(r=null),r},parser:function(n){var r=n;return a(["number","string"],r),r=f(r)?null:parseFloat(r)}},{name:"unsetWhenNull",parser:function(n){return _.isNull(n)&&m(function(){return e.$setViewValue(void 0)}),n}}];function u(){_(o).groupBy("mutualExclusionGroup").forEach(i)}function i(n){var r=[];if(n.forEach(function(n){c(n.name)&&r.push(n.name)}),1<r.length)throw new Error("Cannot use these options together: ".concat(r.join(", ")))}function c(n){return _.get(l(t.c8yModelOptions)(r),n,!1)}function a(n,r){if(!_.includes(n,_typeof(r))&&!_.isUndefined(r)&&!_.isNull(r))throw new Error("Must be of type ".concat(n.join(" or "),"!"))}function s(){return _.isUndefined(e.$modelValue)||_.isNull(e.$modelValue)}function f(n){return _.isNull(n)}e.$formatters.push(function(n){var r=n;return u(),_(o).forEach(function(n){n.formatter&&c(n.name)&&(r=n.formatter(r))}),r}),e.$parsers.push(function(n){var r=n;return u(),_(o).forEach(function(n){n.parser&&c(n.name)&&(r=n.parser(r))}),r})}}}n.$inject=["$parse","$timeout"],angular.module("c8y.ui").directive("c8yModelOptions",n)}();