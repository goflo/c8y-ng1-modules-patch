"use strict";!function(){function n(r){return{require:"ngModel",link:function(n,t,e,i){i.$validators.c8yUrlSegment=function(n,t){var e=n||t;return!r.validation.urlSegment.pattern.test(e)}}}}n.$inject=["c8yConfig"],angular.module("c8y.ui").directive("c8yValidateUrlSegment",n)}();