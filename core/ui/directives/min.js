"use strict";angular.module("c8y.ui").directive("c8yMin",["$parse",function(t){return{restrict:"A",require:"c8yNumber",link:function(n,e,u,r){var c;function i(e){var r=t(u.c8yMin)(n),i=Number(_.isUndefined(r)?NaN:r);return _.isNaN(i)?!c:i<=e}u.$observe("required",function(){c=!_.isUndefined(u.required)&&"false"!==u.required}),r.validator("c8yMin",i)}}}]);